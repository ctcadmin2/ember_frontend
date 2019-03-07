import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';
import { set, computed } from '@ember/object';

export default Controller.extend({
  prefs: alias('model'),
  companyOrder: computed(function() {
    const list = [
      ['name', 'text'],
      ['registration', 'text'],
      ['vat', 'text'],
      ['address', 'textarea'],
      ['acc_eur', 'text'],
      ['acc_ron', 'text'],
      ['bank', 'text'],
      ['capital', 'number'],
      ['phone', 'tel'],
      ['email', 'email']
    ];
    return list;
  }),

  actions: {
    saveCompanyData(prop, value) {
      let prefs = this.prefs;
      let objProp = prefs.getProperties('main').main.hasOwnProperty(prop);

      if (objProp) {
        set(prefs.main, prop, value);
      } else {
        set(prefs.company, prop, value);
      }
      prefs.save();
    },
    updateCategory(category, item) {
      set(this.prefs.main, category, item);
      this.prefs.save();
    }
  }
});
