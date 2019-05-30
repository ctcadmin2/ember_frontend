import Controller from "@ember/controller";
import { alias } from "@ember/object/computed";
import { inject as service } from "@ember/service";

export default Controller.extend({
  flashMessages: service(),
  creditNote: alias("model.creditNote"),
  vehicles: alias("model.vehicles"),
  actions: {
    approveModal() {
      this.creditNote
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
      this.transitionToRoute("credit-notes");
    }
  },

  //private
  _successCallback() {
    this.flashMessages.success("Successfully updated!");
    this.transitionToRoute("companies.index");
  }
});
