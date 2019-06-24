import Controller from "@ember/controller";
import { alias } from "@ember/object/computed";
import { action } from "@ember/object";

export default class UsersController extends Controller {
  @alias("model")
  users;

  @action
  destroyUser(id) {
    this.store
      .findRecord("user", id, { backgroundReload: false })
      .then(
        record =>
          record
            .destroyRecord()
            .then(
              () => this._successCallback(),
              () => this.flashMessages.error("User could not be deleted!")
            )
            .catch(() =>
              this.flashMessages.error(
                "There was an error while deleting the user."
              )
            ),
        () => this.flashMessages.error("User could not be found!")
      )
      .catch(() =>
        this.flashMessages.error(
          "There was an error while looking for the user."
        )
      );
  }
  @action
  toggleUpdate(user) {
    user
      .save()
      .then(
        () => this.flashMessages.success("User was successfully updated!"),
        () => this._failedUpdate(user)
      )
      .catch(() => this._failedUpdate(user));
  }

  //private
  _successCallback() {
    this.send("refreshPage");
    this.flashMessages.success("Successfully deleted!");
  }
  _failedUpdate(model) {
    model.rollbackAttributes();
    this.flashMessages.error("There was an error while updating the user!");
  }
}
