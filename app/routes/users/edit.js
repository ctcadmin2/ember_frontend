import Route from '@ember/routing/route';
import $ from 'jquery';
import { next } from '@ember/runloop';

export default Route.extend({
  model(params) {
    return this.store.findRecord('user', params.user_id);
  },

  actions: {
    didTransition() {
      next(function() {
        $('.userModal').modal('show');
      });
    }
  }
});
