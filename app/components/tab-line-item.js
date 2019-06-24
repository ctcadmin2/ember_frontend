import Component from "@ember/component";
import { action } from "@ember/object";
import { equal } from "@ember/object/computed";

export default class TabLineItem extends Component {
  classNames = ["ui", "item"];
  showIcon = false;
  editMode = false;

  @equal("inputType", "textarea")
  textarea;

  @action
  toggleEdit() {
    if (!this.editMode) {
      this.set("editMode", true);
    }
  }
  @action
  mouseIn(e) {
    e.stopPropagation();
    this.set("showIcon", true);
  }
  @action
  mouseOut(e) {
    e.stopPropagation();
    this.set("showIcon", false);
  }
  @action
  saveChanges(e) {
    e.stopPropagation();
    this.saveData(this.prop, this.value);
    this.set("editMode", false);
  }
}
