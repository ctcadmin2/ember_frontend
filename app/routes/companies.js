import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query('company', {
      page: {
        number: params.page,
        size: params.size
      },
      filter: params.filter
  });
  },
  queryParams: {
    page: {
      refreshModel: true
    },
    size: {
      refreshModel: true
    },
    filter: {
      refreshModel: true
    }
  }
});
