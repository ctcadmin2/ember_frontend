import Route from '@ember/routing/route';
import { next } from "@ember/runloop";
import $ from "jquery";

export default Route.extend({
  model(params) {
    return this.store.findRecord('company', params.company_id, { backgroundReload: false });
  },
  actions: {
    didTransition() {
      next(function() {
        $('.companyModal').modal('show');
      });
    }
    //TODO close modal when transition away
  }
});
