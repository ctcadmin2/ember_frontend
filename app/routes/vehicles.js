import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    },
    size: {
      refreshModel: true
    },
    filter: {
      refreshModel: true
    },
    sort: {
      refreshModel: true
    }
  },

  model(params) {
    return this.store.query('vehicle', {
      page: {
        number: params.page,
        size: params.size
      },
      sort: params.sort,
      filter: {
        q: params.filter
      }
    });
  }
});
