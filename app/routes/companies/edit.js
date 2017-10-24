import Route from '@ember/routing/route';
import { next } from "@ember/runloop";

export default Route.extend({
  model(params) {
    return this.store.findRecord('company', params.company_id);
  },
  actions: {
    didTransition() {
      next(function() {
        $('.companyModal').modal('show');
      });
    }
  }
});
