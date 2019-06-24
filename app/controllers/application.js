import Controller from "@ember/controller";
import { inject as service } from "@ember/service";
import { set, action } from "@ember/object";

export default class Application extends Controller {
  @service session;
  @service router;
  @service currentUser;
  @service intl;

  @action
  invalidateSession() {
    this.session.invalidate();
  }
  @action
  changeLocale(locale) {
    return set(this.intl, "locale", locale);
  }
}
