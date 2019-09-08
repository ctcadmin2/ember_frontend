import Controller from "@ember/controller";
import { alias } from "@ember/object/computed";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";

export default class NewCreditInvoice extends Controller {
  @service flashMessages;

  @alias("model")
  creditInvoice;

  @action
  approveModal() {
    this.creditInvoice
      .save()
      .then(
        () => this._successCallback(),
        () => this.flashMessages.error("Credit invoice could not be created!")
      )
      .catch(() =>
        this.flashMessages.error(
          "There was an error while trying to save your credit invoice."
        )
      );
  }
  @action
  cancelButton() {
    this.transitionToRoute("credit-invoices");
  }

  //private
  _successCallback() {
    this.flashMessages.success("Credit invoice successfully created!");
    this.transitionToRoute("credit-invoices");
  }
}
