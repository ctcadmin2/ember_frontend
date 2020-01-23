import Route from "./protected";
import { next } from "@ember/runloop";
import $ from "jquery";
import { action } from "@ember/object";

export default class SettingsRoute extends Route {
  @action
  didTransition() {
    next(function() {
      // eslint-disable-next-line ember/no-jquery
      $(".tabular .item").tab();
    });
  }
}
