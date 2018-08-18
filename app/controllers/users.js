import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  users: alias('model'),
  actions: {
    destroyUser(id) {
      this.store
        .findRecord('user', id, { backgroundReload: false })
        .then(
          record =>
            record
              .destroyRecord()
              .then(
                () => this._successCallback(),
                () => this.flashMessages.error('User could not be deleted!')
              )
              .catch(() =>
                this.flashMessages.error(
                  'There was an error while deleting the user.'
                )
              ),
          () => this.flashMessages.error('User could not be found!')
        )
        .catch(() =>
          this.flashMessages.error(
            'There was an error while looking for the user.'
          )
        );
    }
  },

  //private
  _successCallback() {
    this.send('refreshPage');
    this.flashMessages.success('Successfully deleted!');
  }
});
