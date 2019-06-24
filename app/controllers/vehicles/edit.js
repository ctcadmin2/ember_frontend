import Controller from "@ember/controller";
import { alias } from "@ember/object/computed";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";

export default class EditVehicle extends Controller {
  @service flashMessages;

  @alias("model")
  vehicle;

  @action
  approveModal() {
    this.vehicle
      .save()
      .then(
        () => this._successCallback(),
        () => {
          this.flashMessages.error(
            "Modifications were not successfully saved!"
          );
          this.transitionToRoute("vehicles");
        }
      )
      .catch(() =>
        this.flashMessages.error(
          "There was an error while trying to save your modifications."
        )
      );
  }
  @action
  cancelButton() {
    this.transitionToRoute("vehicles");
  }

  //private
  _successCallback() {
    this.flashMessages.success("Successfully updated!");
    this.transitionToRoute("vehicles");
  }
}
