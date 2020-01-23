import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class ToggleButton extends Component {
  @action
  toggleObj(obj, prop) {
    obj.toggleProperty(prop);
    this.args.updateObj(obj);
  }
}
