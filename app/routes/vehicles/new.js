import Route from "./../protected";
import { next } from "@ember/runloop";
import $ from "jquery";
import { action } from "@ember/object";

export default class VehicleNewRoute extends Route {
  model() {
    return this.store.createRecord("vehicle");
  }

  @action
  didTransition() {
    next(function() {
      // eslint-disable-next-line ember/no-jquery
      $(".vehicleModal").modal("toggle");
    });
  }
}
