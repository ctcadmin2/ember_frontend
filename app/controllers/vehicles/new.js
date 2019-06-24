import Controller from "@ember/controller";
import { alias } from "@ember/object/computed";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";

export default class NewVehicle extends Controller {
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
            "The vehicle could not be saved successfully!"
          );
          this.transitionToRoute("vehicles");
        }
      )
      .catch(() =>
        this.flashMessages.error(
          "There was an error while trying to save your vehicle."
        )
      );
  }
  @action
  cancelButton() {
    this.transitionToRoute("vehicles");
  }

  //private
  _successCallback() {
    this.flashMessages.success("Successfully created!");
    this.transitionToRoute("vehicles");
  }
}
