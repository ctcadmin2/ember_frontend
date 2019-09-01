import Component from "@ember/component";
import { inject as service } from "@ember/service";
import { computed, action } from "@ember/object";
import { task } from "ember-concurrency";

export default class CreditInvoiceForm extends Component {
  @service store;
  @service session;
  @service settings;
  @service flashMessages;

  showExtra = false;
  showContact = false;

  @computed("creditInvoice.client")
  get lastNumber() {
    //TODO
    return this.creditInvoice.client;
  }

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

  @task(function*() {})
  getLastNumber;

  @action
  closeOther(obj) {
    if (this.get(obj)) {
      this.toggleProperty(obj);
    }
  }
}
