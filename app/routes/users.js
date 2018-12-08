import Route from './protected';
import $ from 'jquery';
import { next } from '@ember/runloop';

export default Route.extend({
  model() {
    return this.store.findAll('user');
  },

  actions: {
    didTransition() {
      next(function() {
        $('body .modals').dimmer('hide');
      });
    }
  }
});