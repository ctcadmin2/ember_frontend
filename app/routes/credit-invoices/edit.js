import Route from "./../protected";
import { action } from "@ember/object";
import { next } from "@ember/runloop";
import $ from "jquery";

export default class CreditInvoiceEditRoute extends Route {
  model(params) {
    return this.store.findRecord("credit-invoice", params.credit_invoice_id);
  }
  @action
  didTransition() {
    next(function() {
      $(".creditInvoiceModal").modal("toggle");
    });
  }
}
