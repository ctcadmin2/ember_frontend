import Component from "@ember/component";
import { action } from "@ember/object";

export default class ToggleButton extends Component {
  tagName = "";

  @action
  toggleObj(obj, prop) {
    obj.toggleProperty(prop);
    this.updateObj(obj);
  }
}
