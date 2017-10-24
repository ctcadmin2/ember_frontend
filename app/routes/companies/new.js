import Route from '@ember/routing/route';
import { next } from "@ember/runloop";

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
