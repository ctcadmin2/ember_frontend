import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  flashMessages: service(),
  user: alias('model'),

  actions: {
    createUser() {
      get(this, 'user')
        .save()
        .then(
          () => this._succesCallback(),
          () => this.flashMessages.error('Account could not be created.')
        )
        .catch(() =>
          this.flashMessages.error(
            'There was an error while creating your account.'
          )
        );
    }
  },
  _succesCallback() {
    this.flashMessages.info(
      'Your account has been created. Please wait for an admin to activate it.'
    );
    this.transitionToRoute('login');
  }
});
