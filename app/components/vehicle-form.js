import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';

export default Component.extend({
  store: service(),
  prefs: null,
  init() {
    this._super(...arguments);
    this.store.findRecord('settings', 1).then(r => set(this, 'prefs', r.main));
  }
});
