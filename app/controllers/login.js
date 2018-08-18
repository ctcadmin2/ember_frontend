import Controller from '@ember/controller';
import { getProperties } from '@ember/object';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  session: service(),
  flashMessages: service(),
  none: alias('model'),
  actions: {
    authenticate() {
      const { email, password } = getProperties(this, 'email', 'password');
      const authenticator = 'authenticator:jwt';
      const session = this.session;
      session
        .authenticate(authenticator, { email, password })
        .then(this._processSuccess.bind(this), this._processError.bind(this));
    }
  },
  _processSuccess() {
    this.flashMessages.success('Welcome!');
  },
  _processError(error) {
    if (error.status == 404) {
      this.flashMessages.error('User/password was not found!');
    } else {
      this.flashMessages.info(
        'Your account has been created. Please wait for an admin to activate it.'
      );
    }
  }
});
