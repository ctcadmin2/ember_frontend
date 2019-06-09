import Controller from "@ember/controller";
import { alias } from "@ember/object/computed";
import { inject as service } from "@ember/service";

export default Controller.extend({
  flashMessages: service(),
  creditInvoice: alias("model"),
  actions: {
    approveModal() {
      this.creditInvoice
        .save()
        .then(
          () => this._successCallback(),
          () =>
            this.flashMessages.error(
              "Modifications were not successfully saved!"
            )
        )
        .catch(() =>
          this.flashMessages.error(
            "There was an error while trying to save your modifications."
          )
        );
    },
    cancelButton() {
      this.transitionToRoute("credit-invoices");
    }
  },

  //private
  _successCallback() {
    this.flashMessages.success("Successfully updated!");
    this.transitionToRoute("credit-invoices");
  }
});
