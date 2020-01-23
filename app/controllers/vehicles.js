import Controller from "@ember/controller";
import { isEmpty } from "@ember/utils";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";

export default class VehiclesController extends Controller {
  @service flashMessages;

  queryParams = ["page", "size", "sort"];
  page = 1;
  size = 5;
  sort = "registration";

  get vehicles() {
    return this.model;
  }

  get filterEmpty() {
    return isEmpty(this.filter);
  }

  @action
  pageChange(page) {
    this.transitionToRoute({ queryParams: { page: page } });
  }

  @action
  destroyVehicle() {
    //TODO add function
  }
}
