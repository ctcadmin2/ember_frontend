import Controller from "@ember/controller";
import { set, action, computed } from "@ember/object";
import { inject as service } from "@ember/service";

export default class SettingsController extends Controller {
  @service settings;

  @computed("settings.main")
  get main() {
    return this.settings.getData("main");
  }

  @computed("settings.company")
  get company() {
    return this.settings.getData("company");
  }

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
    this.settings.updateData.perform("main", data);
  }
}
