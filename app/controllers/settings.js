import Controller from "@ember/controller";
import { set, action } from "@ember/object";
import { inject as service } from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class SettingsController extends Controller {
  @service settings;

  @tracked main = this.settings.main;
  @tracked company = this.settings.company;

  companyOrder = [
    ["name", "text"],
    ["registration", "text"],
    ["vat", "text"],
    ["address", "textarea"],
    ["accEur", "text"],
    ["accRon", "text"],
    ["bank", "text"],
    ["capital", "number"],
    ["phone", "tel"],
    ["email", "email"]
  ];

  @action
  saveCompanyData(prop, value) {
    let prefs = this.settings;
    let objProp = prefs.main[prop];

    if (objProp) {
      set(prefs.main, prop, value);
      prefs.update("main", prefs.main);
    } else {
      set(prefs.company, prop, value);
      prefs.update("company", prefs.company);
    }
  }
  @action
  updateCategory(category, item) {
    let data = this.main;
    set(data, category, item);
    this.settings.update("main", data);
  }
}
