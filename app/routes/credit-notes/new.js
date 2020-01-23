import Route from "./../protected";
import { next } from "@ember/runloop";
import $ from "jquery";
import RSVP from "rsvp";
import { action } from "@ember/object";

export default class CreditNoteNewRoute extends Route {
  model() {
    return RSVP.hash({
      creditNote: this.store.createRecord("creditNote"),
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
