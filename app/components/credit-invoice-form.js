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

  @task(function*(clientId) {
    let client = yield this.store.findRecord("company", clientId);
    let national = client.country === "RO";

    let invoiceList = yield this.store.query("credit-invoice", {
      filter: {
        national
      },
      fields: {
        "credit-invoices": "number"
      }
    });
    let lastNumber = invoiceList.mapBy("number").sort().lastObject;
    this.creditInvoice.set("number", lastNumber + 1);
  })
  getLastNumber;

  @action
  closeOther(obj) {
    if (this.get(obj)) {
      this.toggleProperty(obj);
    }
  }

  @action
  setClient(client) {
    this.set("client", client);
    this.getLastNumber.perform(client);
  }
}
