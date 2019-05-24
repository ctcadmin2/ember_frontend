import Route from './protected';
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
