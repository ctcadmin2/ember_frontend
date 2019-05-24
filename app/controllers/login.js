import Controller from '@ember/controller';
import { getProperties } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  flashMessages: service(),
  actions: {
    userAuth() {
      const { email, password } = getProperties(this, 'email', 'password');
      const authenticator = 'authenticator:jwt';
      const session = this.session;
      // eslint-disable-next-line ember/named-functions-in-promises
      session
        .authenticate(authenticator, { email, password })
        .then(this._processSuccess.bind(this), this._processError.bind(this));
    }
  },
  _processSuccess() {
    this.flashMessages.success('Welcome!');
  },
  _processError(error) {
    if (error == 404) {
      this.flashMessages.error('User/password was not found!');
    } else {
      this.flashMessages.info(
        'Your account has been created. Please wait for an admin to activate it.'
      );
    }
  }
});
