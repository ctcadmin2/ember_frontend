import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

// Eslint rules
/* eslint ember/alias-model-in-controller: "off"*/

export default Controller.extend({
  session: service(),
  currentUser: service(),
  actions: {
    invalidateSession() {
      this.session.invalidate();
    }
  }
});
