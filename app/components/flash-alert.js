import Component from "@ember/component";
import { action } from "@ember/object";
import $ from "jquery";
import { tracked } from "@glimmer/tracking";

export default class FlashAlert extends Component {
  @tracked
  type = this.flash.type;

  get statusClass() {
    if (this.type === "success") {
      return "checkmark";
    } else {
      return "remove";
    }
  }

  @action
  closeButton() {
    $(".message").transition("slide right");
  }
}
