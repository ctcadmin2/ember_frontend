import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';

// Eslint rules
/* eslint ember/alias-model-in-controller: "off"*/

export default Controller.extend({
  session: service(),
  router: service(),
  currentUser: service(),
  intl: service(),
  actions: {
    invalidateSession() {
      this.session.invalidate();
    },
    changeLocale(locale) {
      return set(this.intl, 'locale', locale);
    }
  }
});
