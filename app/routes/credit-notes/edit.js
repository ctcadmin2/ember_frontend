import Route from "./../protected";
import { hash } from "rsvp";
import { action } from "@ember/object";
import { next } from "@ember/runloop";
import $ from "jquery";

export default class CreditNotesEditRoute extends Route {
  model(params) {
    return hash({
      creditNote: this.store.findRecord("credit-note", params.credit_note_id, {
        include: "vehicle"
      }),
      vehicles: this.store.findAll("vehicle")
    });
  }

  @action
  didTransition() {
    next(function() {
      // eslint-disable-next-line ember/no-jquery
      $(".creditNoteModal").modal("toggle");
    });
  }
}
