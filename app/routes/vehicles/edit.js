import Route from "./../protected";
import { next } from "@ember/runloop";
import $ from "jquery";
import { action } from "@ember/object";

export default class VehicleEditRoute extends Route {
  model(params) {
    return this.store.findRecord("vehicle", params.vehicle_id);
  }

  @action
  didTransition() {
    next(function() {
      $(".vehicleModal").modal("toggle");
    });
  }
}
