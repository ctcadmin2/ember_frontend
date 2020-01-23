import Route from "./../protected";
import { next } from "@ember/runloop";
import $ from "jquery";
import { action } from "@ember/object";

export default class CompanyNewRoute extends Route {
  model() {
    return this.store.createRecord("company");
  }
  @action
  didTransition() {
    next(function() {
      // eslint-disable-next-line ember/no-jquery
      $(".companyModal").modal("toggle");
    });
  }
}
