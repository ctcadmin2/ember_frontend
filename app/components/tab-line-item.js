import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class TabLineItem extends Component {
  @tracked showIcon = false;
  @tracked editMode = false;

  textarea() {
    return this.args.inputType === "textarea";
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
    this.args.saveData(this.args.prop, this.args.value);
    this.editMode = false;
  }
}
