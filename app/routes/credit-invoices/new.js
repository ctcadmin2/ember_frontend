import Route from "./../protected";
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
      // eslint-disable-next-line ember/no-jquery
      $(".creditInvoiceModal").modal("toggle");
    });
  }
}
