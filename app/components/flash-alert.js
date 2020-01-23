import Component from "@glimmer/component";
import { action } from "@ember/object";
import $ from "jquery";
import { tracked } from "@glimmer/tracking";

export default class FlashAlert extends Component {
  @tracked
  type = this.args.flash.type;

  get statusClass() {
    if (this.type === "success") {
      return "checkmark";
    } else {
      return "remove";
    }
  }

  @action
  closeButton() {
    // eslint-disable-next-line ember/no-jquery
    $(".message").transition("slide right");
  }
}
