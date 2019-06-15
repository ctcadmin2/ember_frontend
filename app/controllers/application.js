import Controller from "@ember/controller";
import { inject as service } from "@ember/service";
import { set, computed } from "@ember/object";

// Eslint rules
/* eslint ember/alias-model-in-controller: "off"*/

export default Controller.extend({
  session: service(),
  router: service(),
  currentUser: service(),
  intl: service(),
  fullName: computed("currentUser", function() {
    if (this.currentUser.user) {
      let fName = this.currentUser.user.firstName;
      let lName = this.currentUser.user.lastName;
      return `${fName} ${lName}`;
    }
  }),
  actions: {
    invalidateSession() {
      this.session.invalidate();
    },
    changeLocale(locale) {
      return set(this.intl, "locale", locale);
    }
  }
});
