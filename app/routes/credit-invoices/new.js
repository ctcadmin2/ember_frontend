import Route from "@ember/routing/route";
import { next } from "@ember/runloop";
import $ from "jquery";
import { action } from "@ember/object";

export default class CreditInvoiceNewRoute extends Route {
  model() {
    return this.store.createRecord("credit-invoice");
  }
  @action
  didTransition() {
    next(function() {
      $(".creditInvoiceModal").modal("toggle");
    });
  }
}
