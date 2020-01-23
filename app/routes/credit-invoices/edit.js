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
      // eslint-disable-next-line ember/no-jquery
      $(".creditInvoiceModal").modal("toggle");
    });
  }
}
