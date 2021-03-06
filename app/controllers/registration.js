import Controller from "@ember/controller";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";

export default class RegistrationController extends Controller {
  @service flashMessages;

  get user() {
    return this.model;
  }

  @action
  createUser() {
    this.user
      .save()
      .then(
        () => this._succesCallback(),
        () => this.flashMessages.error("Account could not be created.")
      )
      .catch(() =>
        this.flashMessages.error(
          "There was an error while creating your account."
        )
      );
  }

  _succesCallback() {
    this.flashMessages.info(
      "Your account has been created. Please wait for an admin to activate it."
    );
    this.transitionToRoute("login");
  }
}
