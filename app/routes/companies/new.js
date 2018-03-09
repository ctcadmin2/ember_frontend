import Route from '@ember/routing/route';
import { next } from "@ember/runloop";
import $ from "jquery";

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
