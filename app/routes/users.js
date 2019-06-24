import Route from "./protected";
import $ from "jquery";
import { next } from "@ember/runloop";
import { action } from "@ember/object";

export default class UsersRoute extends Route {
  model() {
    return this.store.findAll("user");
  }

  @action
  didTransition() {
    next(function() {
      $("body .modals").dimmer("hide");
    });
  }
}
