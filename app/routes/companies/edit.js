import Route from './../protected';
import { next } from "@ember/runloop";
import $ from "jquery";

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
