import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  flashMessages: service(),
  company: alias('model'),
  actions: {
    approveModal() {
      get(this, 'company')
        .save()
        .then(
          () => this._successCallback(),
          () =>
            this.flashMessages.error(
              'Modifications were not successfully saved!'
            )
        )
        .catch(() =>
          this.flashMessages.error(
            'There was an error while trying to save your modifications.'
          )
        );
    },
    cancelButton() {
      this.transitionToRoute('companies.index');
    }
  },

  //private
  _successCallback() {
    this.flashMessages.success('Successfully updated!');
    this.transitionToRoute('companies.index');
  }
});
//TODO validation
