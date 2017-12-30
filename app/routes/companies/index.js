import Route from '@ember/routing/route';
import { next } from "@ember/runloop";

export default Route.extend({
  queryParams: {
    page: {
      refreshModel: true,
      scope: 'controller'
    },
    size: {
      refreshModel: true,
      scope: 'controller'
    },
    filter: {
      refreshModel: true,
      scope: 'controller'
    },
    sort: {
      refreshModel: true,
      scope: 'controller'
    }
  },

  model(params) {
    return this.store.query('company', {
      page: {
        number: params.page,
        size: params.size
      },
      sort: params.sort,
      filter: {
        q: params.filter
      }
    })
  },

  actions: {
    didTransition() {
      next(function() {
        $('body .modals').dimmer('hide'); //dimmer doesn't close on back button
      });                                 // TODO find nicer fix
    },
    refreshPage() {
      this.refresh();
    }
  }
});
