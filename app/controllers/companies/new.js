import Controller from "@ember/controller";
import { set, action } from "@ember/object";

export default class NewCompany extends Controller {
  get company() {
    return this.model;
  }

  showForm = false;

  @action
  approveModal() {
    this.company.save().then(this._saveCallback());
  }
  @action
  cancelButton() {
    set(this, "showForm", false);
    this.transitionToRoute("companies.index");
  }
  @action
  returnData(response) {
    let data = response.data;
    if (data) {
      let keys = Object.keys(data);
      let model = this.model;

      keys.forEach(key => {
        let keyName = data[key];

        if (keyName !== null) {
          set(model, key, keyName);
        }
      });
    }
    set(this, "showForm", true);
  }

  //private

  _saveCallback() {
    set(this, "showForm", false);
    this.send("refreshPage");
    this.transitionToRoute("companies");
  }
}
