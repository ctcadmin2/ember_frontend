import Controller from "@ember/controller";
import { set, action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class SettingsController extends Controller {
  @service settings;

  get main() {
    return this.settings.getData("main");
  }

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
      this.prefs.main[prop] = value;
      this.prefs.update("main", prefs.main);
    } else {
      this.prefs.company[prop] = value;
      this.prefs.update("company", prefs.company);
    }
  }
  @action
  updateCategory(category, item) {
    let data = this.main;
    set(data, category, item);
    this.settings.updateData.perform("main", data);
  }
}
