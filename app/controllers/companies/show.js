import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  company: alias('model'),
  actions: {
    okButton() {
      this.transitionToRoute('companies.index');
    }
  }
});
