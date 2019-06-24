import Route from "./../protected";
import { next } from "@ember/runloop";
import $ from "jquery";
import { action } from "@ember/object";

export default class CompanyEditRoute extends Route {
  model(params) {
    return this.store.findRecord("company", params.company_id);
  }
  @action
  didTransition() {
    next(function() {
      $(".companyModal").modal("show");
    });
  }
}
