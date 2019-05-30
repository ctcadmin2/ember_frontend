import Controller from "@ember/controller";
import { set, computed } from "@ember/object";
import { inject as service } from "@ember/service";

export default Controller.extend({
  settings: service(),
  main: computed("settings.main", function() {
    return this.settings.main;
  }),
  company: computed("settings.company", function() {
    return this.settings.company;
  }),
  // FIX find better way
  companyOrder: computed(function() {
    const list = [
      ["name", "text"],
      ["registration", "text"],
      ["vat", "text"],
      ["address", "textarea"],
      ["acc_eur", "text"],
      ["acc_ron", "text"],
      ["bank", "text"],
      ["capital", "number"],
      ["phone", "tel"],
      ["email", "email"]
    ];
    return list;
  }),

  actions: {
    saveCompanyData(prop, value) {
      let prefs = this.settings;
      let objProp = prefs.getProperties("main").main.hasOwnProperty(prop);

      if (objProp) {
        set(prefs.main, prop, value);
        prefs.update("main", prefs.main);
      } else {
        set(prefs.company, prop, value);
        prefs.update("company", prefs.company);
      }
    },
    updateCategory(category, item) {
      let data = this.main;
      set(data, category, item);
      this.settings.update("main", data);
    }
  }
});
