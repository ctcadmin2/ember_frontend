import Route from "@ember/routing/route";
import { next } from "@ember/runloop";
import $ from "jquery";
import RSVP from "rsvp";

export default Route.extend({
  model() {
    return RSVP.hash({
      creditNote: this.store.createRecord("creditNote"),
      vehicles: this.store.findAll("vehicle")
    });
  },

  actions: {
    didTransition() {
      next(function() {
        $(".creditNoteModal").modal("toggle");
      });
    }
  }
});
