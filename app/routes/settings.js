import Route from '@ember/routing/route';
import { next } from '@ember/runloop';
import $ from 'jquery';

export default Route.extend({
  model() {
    return this.store.findRecord('settings', 1);
  },
  actions: {
    didTransition() {
      next(function() {
        $('.tabular .item').tab();
      });
    }
  }
});
