import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';
import { set } from '@ember/object';

export default Controller.extend({
  prefs: alias('model'),

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
