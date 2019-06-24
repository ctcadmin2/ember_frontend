import Component from "@ember/component";
import {  action } from "@ember/object";
import $ from "jquery";
import {inject as service} from "@ember/service";

export default class FlashAlert extends Component {

  @service("flash")

  get statusClass() {
    if (this.get("flash.type") === "success") {
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
