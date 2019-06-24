import Controller from "@ember/controller";
import { alias } from "@ember/object/computed";
import { action } from "@ember/object";

export default class ShowCompany extends Controller {
  @alias("model")
  company;

  @action
  okButton() {
    this.transitionToRoute("companies.index");
  }
}
