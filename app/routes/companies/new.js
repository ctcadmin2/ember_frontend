import Route from './../protected';
import { next } from '@ember/runloop';
import $ from 'jquery';

export default Route.extend({
  model() {
    return this.store.createRecord('company');
  },
  actions: {
    didTransition() {
      next(function() {
        $('.companyModal').modal('toggle');
      });
    }
  }
});
