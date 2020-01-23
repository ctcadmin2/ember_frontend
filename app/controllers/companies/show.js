import Controller from "@ember/controller";
import { action } from "@ember/object";

export default class ShowCompany extends Controller {
  get company() {
    return this.model;
  }

  @action
  okButton() {
    this.transitionToRoute("companies.index");
  }
}
