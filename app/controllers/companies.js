import Controller from '@ember/controller';
import { alias, empty, gte } from '@ember/object/computed';
import { get, set } from '@ember/object';
import { inject as service } from '@ember/service';
//TODO check all promises paths

export default Controller.extend({
  flashMessages: service(),
  companyInfo: service(),
  test: null,
  queryParams: ['page', 'size', 'sort', 'filter'],
  page: 1,
  size: 5,
  filter: '',
  sort: 'name',
  filterEmpty: empty('filter'),
  companies: alias('model'),
  showPagination: gte('model.meta.page-count', 2),

  actions: {
    clearFilter() {
      set(this, 'filter', '');
    },
    setPage() {
      set(this, 'page', 1);
    },
    destroyCompany(id) {
      get(this, 'store')
        .findRecord('company', id, { backgroundReload: false })
        .then(
          record =>
            record
              .destroyRecord()
              .then(
                () => this._successCallback(),
                () => this.flashMessages.error('Company could not be deleted!')
              )
              .catch(() =>
                this.flashMessages.error(
                  'There was an error while deleting the company.'
                )
              ),
          () => this.flashMessages.error('Company could not be found!')
        )
        .catch(() =>
          this.flashMessages.error(
            'There was an error while looking for the company.'
          )
        );
    },

    // TODO refactor
    sort(prop) {
      let sortParam = get(this, 'sort');
      if (sortParam.includes(prop)) {
        let index = sortParam.indexOf(prop);
        if (sortParam[index - 1] === '-') {
          sortParam = sortParam.substr(0, index - 1) + sortParam.substr(index);
        } else {
          sortParam =
            sortParam.substr(0, index) + '-' + sortParam.substr(index);
        }
      } else {
        sortParam = sortParam + ',' + prop;
      }
      set(this, 'sort', sortParam);
    }
  },

  //private
  _successCallback() {
    this.send('refreshPage');
    this.flashMessages.success('Successfully deleted!');
  }
});

//TODO write tests
//TODO translate
