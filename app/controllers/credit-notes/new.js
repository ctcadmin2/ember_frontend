import Controller from "@ember/controller";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";

export default class NewCreditNote extends Controller {
  @service flashMessages;

  get creditNote() {
    return this.model.creditNote;
  }
  get vehicles() {
    return this.model.vehicles;
  }

  @action
  approveModal() {
    this.creditNote
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
    this.transitionToRoute("credit-notes");
  }

  //private
  _successCallback() {
    this.flashMessages.success("Successfully updated!");
    this.transitionToRoute("credit-notes");
  }
}
