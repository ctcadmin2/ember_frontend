import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page', 'size', 'filter'],
  page: 1,
  size: 5,
  filter: '',
  filterEmpty: Ember.computed.empty('filter'),
  showPagination: Ember.computed.gte('model.meta.total_pages', 2),
  paginationReset: Ember.observer('filter', function() {
    this.set('page', 1);
  }),
  actions: {
    clearFilter() {
        this.set('filter', '');
    },
    openModal(name) {
      Ember.$(`.ui.${name}.modal`).modal('show');
    },
    approveModal(){

    },
    denyModal() {

    }
  }
});
