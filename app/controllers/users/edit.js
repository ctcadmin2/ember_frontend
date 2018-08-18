import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Controller.extend({
  user: alias('model'),
  flashMessages: service(),

  actions: {
    okButton() {
      const user = this.user;
      user
        .save()
        .then(
          () => this._successCallback(),
          () => this.flashMessages.error('User could not be updated!')
        );
      this.transitionToRoute('users');
    },
    cancelButton() {
      this.transitionToRoute('users');
    },
    destroyUser() {
      this.user.save().then(() => this.transitionToRoute('users'));
    }
  },

  //private
  _successCallback() {
    this.flashMessages.success('User successfully updated!');
  }
});
