import Route from './protected';
import { next } from '@ember/runloop';
import $ from 'jquery';

export default Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    },
    size: {
      refreshModel: true
    },
    filter: {
      q: {
        refreshModel: true
      }
    },
    sort: {
      refreshModel: true
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
    });
  },

  actions: {
    didTransition() {
      next(function() {
        $('body .modals').dimmer('hide'); //dimmer doesn't close on back button TODO find nicer fix
      });
    },
    refreshPage() {
      this.refresh();
    }
  }
});
