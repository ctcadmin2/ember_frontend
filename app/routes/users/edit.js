import Route from "@ember/routing/route";
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
      $(".userModal").modal("show");
    });
  }
}
