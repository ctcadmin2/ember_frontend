import Controller from "@ember/controller";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";

export default class LoginController extends Controller {
  @service session;
  @service flashMessages;

  @action
  userAuth(e) {
    e.preventDefault();
    const { email, password } = { email: this.email, password: this.password };
    const authenticator = "authenticator:jwt";
    const session = this.session;
    session
      .authenticate(authenticator, { email, password })
      .then(this._processSuccess.bind(this), this._processError.bind(this));
  }

  _processSuccess() {
    this.flashMessages.success("Welcome!");
  }
  _processError(error) {
    if (error === 404) {
      this.flashMessages.error("User/password was not found!");
    } else {
      this.flashMessages.info(
        "Your account has been created. Please wait for an admin to activate it."
      );
    }
  }
}
