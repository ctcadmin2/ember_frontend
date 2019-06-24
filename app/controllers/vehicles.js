import Controller from "@ember/controller";
import { alias, empty } from "@ember/object/computed";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";

export default class VehiclesController extends Controller {
  @service flashMessages;

  queryParams = ["page", "size", "sort"];
  page = 1;
  size = 5;
  sort = "registration";

  @alias("model")
  vehicles;
  @empty("filter")
  filterEmpty;

  @action
  destroyVehicle() {
    //TODO add function
  }
}
