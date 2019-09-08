import Component from "@ember/component";
import { inject as service } from "@ember/service";
import { computed, action } from "@ember/object";
import { task } from "ember-concurrency";

export default class CreditInvoiceForm extends Component {
  @service store;
  @service session;
  @service settings;
  @service flashMessages;

  extra = {};
  contact = {};

  showExtra = false;
  showContact = false;

  @computed("settings.main")
  get main() {
    return this.settings.getData("main");
  }

  get clientList() {
    return this.store.query("company", {
      fields: {
        companies: "name,country"
      }
    });
  }

  get cNotesList() {
    return this.store.query("credit-note", {
      filter: {
        paid: false
      },
      fields: {
        "credit-notes": "number"
      }
    });
  }

  @task(function*(client) {
    let national = client.get("country") === "RO";

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
  lastNumberTask;

  @action
  sectionSwitcher(obj) {
    if (this.get(obj)) {
      this.toggleProperty(obj);
    }
  }

  @action
  addExtraData() {
    this.creditInvoice.set("extra", this.extra);
    this.creditInvoice.set("contact", this.contact);
  }

  @action
  getLastNumber() {
    if (!this.creditInvoice.number) {
      this.lastNumberTask.perform(this.creditInvoice.company);
    }
  }
}
