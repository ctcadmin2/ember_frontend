import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Controller.extend({
  vehicle: alias('model'),
  flashMessages: service(),

  actions: {
    approveModal() {
      this.vehicle
        .save()
        .then(
          () => this._successCallback(),
          () => {
            this.flashMessages.error(
              'The vehicle could not be saved successfully!'
            );
            this.transitionToRoute('vehicles');
          }
        )
        .catch(() =>
          this.flashMessages.error(
            'There was an error while trying to save your vehicle.'
          )
        );
    },
    cancelButton() {
      this.transitionToRoute('vehicles');
    }
  },

  //private
  _successCallback() {
    this.flashMessages.success('Successfully created!');
    this.transitionToRoute('vehicles');
  }
});
