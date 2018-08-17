import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';
import { get, set } from '@ember/object';

export default Controller.extend({
  company: alias('model'),
  showForm: false,
  actions: {
    approveModal() {
      get(this, 'company')
        .save()
        .then(this._saveCallback());
    },
    cancelButton() {
      set(this, 'showForm', false);
      this.transitionToRoute('companies.index');
    },
    returnData(response) {
      let data = response.data;
      if (data) {
        let keys = Object.keys(data);
        let model = get(this, 'model');

        keys.forEach(key => {
          let keyName = data[key];

          if (keyName !== null) {
            set(model, key, keyName);
          }
        });
      }
      set(this, 'showForm', true);
    }
  },

  //private

  _saveCallback() {
    set(this, 'showForm', false);
    this.transitionToRoute('companies.index');
  }
});
