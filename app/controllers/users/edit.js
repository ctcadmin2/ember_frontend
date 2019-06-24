import Controller from "@ember/controller";
import { alias } from "@ember/object/computed";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";

export default class EditUser extends Controller {
  @service flashMessages;

  @alias("model")
  user;

  @action
  okButton() {
    const user = this.user;
    user
      .save()
      .then(
        () => this._successCallback(),
        () => this.flashMessages.error("User could not be updated!")
      );
    this.transitionToRoute("users");
  }
  @action
  cancelButton() {
    this.transitionToRoute("users");
  }
  @action
  destroyUser() {
    this.user.save().then(() => this.transitionToRoute("users"));
  }

  //private
  _successCallback() {
    this.flashMessages.success("User successfully updated!");
  }
}
