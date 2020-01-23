import Route from "./../protected";
import $ from "jquery";
import { next } from "@ember/runloop";
import { action } from "@ember/object";

export default class UserEditRoute extends Route {
  model(params) {
    return this.store.findRecord("user", params.user_id);
  }

  @action
  didTransition() {
    next(function() {
      // eslint-disable-next-line ember/no-jquery
      $(".userModal").modal("show");
    });
  }
}
