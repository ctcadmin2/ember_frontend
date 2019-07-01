import Component from "@ember/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class CreditNoteForm extends Component {
  @service store;
  @service settings;

  @tracked selectedVehicle = this.creditNote.vehicle;

  @action
  setVehicle(vehicle) {
    this.store
      .findRecord("vehicle", vehicle)
      .then(v => this.creditNote.set("vehicle", v));
  }
}
