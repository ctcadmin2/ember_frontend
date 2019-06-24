import Controller from "@ember/controller";
import { alias } from "@ember/object/computed";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";

export default class EditCompany extends Controller {
  @service flashMessages;

  @alias("model")
  company;

  @action
  approveModal() {
    this.company
      .save()
      .then(
        () => this._successCallback(),
        () =>
          this.flashMessages.error("Modifications were not successfully saved!")
      )
      .catch(() =>
        this.flashMessages.error(
          "There was an error while trying to save your modifications."
        )
      );
  }
  @action
  cancelButton() {
    this.transitionToRoute("companies.index");
  }

  //private
  _successCallback() {
    this.flashMessages.success("Successfully updated!");
    this.transitionToRoute("companies.index");
  }
}
//TODO validation
