/* eslint-disable no-console */
/* eslint-disable ember/named-functions-in-promises */
import Component from "@ember/component";
import { computed } from "@ember/object";
import { inject as service } from "@ember/service";

export default Component.extend({
  store: service(),
  currencies: this.store.findRecord("prefs", 1),
  selectedVehicle: computed("creditNote.vehicle", function() {
    return this.creditNote.vehicle;
  }),
  actions: {
    setVehicle(vehicle) {
      this.store
        .findRecord("vehicle", vehicle)
        .then(v => this.creditNote.set("vehicle", v));
    }
  }
});
