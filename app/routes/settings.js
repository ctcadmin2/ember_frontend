import Route from "./protected";
import { next } from "@ember/runloop";
import $ from "jquery";

export default Route.extend({
  actions: {
    didTransition() {
      next(function() {
        $(".tabular .item").tab();
      });
    }
  }
});
