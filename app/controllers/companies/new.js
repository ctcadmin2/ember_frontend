import Controller from '@ember/controller';
import { alias, empty } from "@ember/object/computed"
import {inject as service} from '@ember/service';
import { get } from '@ember/object';

export default Controller.extend({
  countries: service(),
  company: alias('model'),
  saveDisabled: empty('company.name'),
  actions: {
    approveModal() {
      get(this, 'company').save().then(this.transitionToRoute('companies.index'));
    },
    denyModal() {
      this.transitionToRoute('companies.index');
    }
  }
});
