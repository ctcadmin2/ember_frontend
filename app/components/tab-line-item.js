import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class TabLineItem extends Component {
  classNames = ["ui", "item"];
  showIcon = false;
  editMode = false;

  textarea() {
    return this.inputType === "textarea";
  }

  @action
  toggleEdit() {
    if (!this.editMode) {
      this.editMode = true;
    }
  }
  @action
  mouseIn(e) {
    e.stopPropagation();
    this.showIcon = true;
  }
  @action
  mouseOut(e) {
    e.stopPropagation();
    this.showIcon = false;
  }
  @action
  saveChanges(e) {
    e.stopPropagation();
    this.saveData(this.prop, this.value);
    this.editMode = false;
  }
}
