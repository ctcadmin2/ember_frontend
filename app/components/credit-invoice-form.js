import Component from "@ember/component";
import { inject as service } from "@ember/service";
import { computed } from "@ember/object";

export default class CreditInvoiceForm extends Component {
  @service store;
  @service session;
  @service settings;
  @service flashMessages;

  lastNumber = null;

  @computed("settings.main")
  get main() {
    return this.settings.getData("main");
  }

  get clientList() {
    return this.store.query("company", {
      fields: {
        company: "name"
      }
    });
  }
}
