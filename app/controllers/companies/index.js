import Controller from '@ember/controller';
import { alias, empty, gte } from "@ember/object/computed";
import { get, set } from '@ember/object';
import {inject as service} from '@ember/service';

//TODO check all promises paths

export default Controller.extend({
  flashMessages: service(),
  queryParams: ['page', 'size', 'filter'],
  page: 1,
  size: 5,
  filter: '',
  filterEmpty: empty('filter'),
  companies: alias('model'),
  showPagination: gte('model.meta.total_pages', 2),
  actions: {
    clearFilter() {
      set(this, 'filter', '');
    },
    setPage() {
      set(this, 'page', 1);
    },
    destroyCompany(id) {
      //if (confirm('Are you sure?')) {
        get(this, 'store').findRecord('company', id, {backgroundReload: false})
          .then(
            (record) => {
              record.destroyRecord().then(
                () => {
                  this.send('refreshPage');
                  this.flashMessages.success('Successfully deleted!');
                },
                () => {this.flashMessages.error('Company could not be deleted!')}
              ).catch(() => {this.flashMessages.error('There was an error while deleting the company.')})
            },
            () => {this.flashMessages.error('Company could not be found!')}
          )
          .catch(
            () => {this.flashMessages.error('There was an error while looking for the company.')}
          )
      //}
    }
  }
});


//TODO write tests
//TODO translate
