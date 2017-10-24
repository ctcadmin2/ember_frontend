import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';
import { get } from '@ember/object';

export default Controller.extend({
  company: alias('model'),
  actions: {
    approveModal() {
      this.transitionToRoute('companies.index');
    }
  }
});
