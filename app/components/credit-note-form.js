/* eslint-disable no-console */
/* eslint-disable ember/named-functions-in-promises */
import Component from "@ember/component";
import { computed, action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class CreditNoteForm extends Component {
  @service store;
  @service settings;

  @computed("creditNote.vehicle")
  get selectedVehicle() {
    return this.creditNote.vehicle;
  }

  @action
  setVehicle(vehicle) {
    this.store
      .findRecord("vehicle", vehicle)
      .then(v => this.creditNote.set("vehicle", v));
  }
}
