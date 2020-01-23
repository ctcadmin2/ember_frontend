import Route from "./../protected";
import { next } from "@ember/runloop";
import $ from "jquery";
import { action } from "@ember/object";

export default class CompanyShowRoute extends Route {
  model(params) {
    return this.store.findRecord("company", params.company_id, {
      backgroundReload: false
    });
  }
  @action
  didTransition() {
    next(function() {
      // eslint-disable-next-line ember/no-jquery
      $(".companyModal").modal("show");
    });
  }
  //TODO close modal when transition away
}
