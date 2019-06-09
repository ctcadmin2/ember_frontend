import Route from "@ember/routing/route";
import { next } from "@ember/runloop";
import $ from "jquery";

export default Route.extend({
  model() {
    return this.store.createRecord("credit-invoice");
  },
  actions: {
    didTransition() {
      next(function() {
        $(".creditInvoiceModal").modal("toggle");
      });
    }
  }
});
