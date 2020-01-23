import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class TabMultilineItem extends Component {
  value = "";
  editMode = false;
  showSaveIcon = false;

  @action
  removeItem(item) {
    this.list.removeObject(item);
    this.updateData(this.category, this.list);
  }
  @action
  addItem(e) {
    e.stopPropagation();

    this.list.pushObject(this.value);
    this.updateData(this.category, this.list);

    this.editMode = false;
    this.value = "";
  }
  @action
  addMode() {
    if (this.editMode === false) {
      this.editMode = true;
    }
  }
  @action
  mouseOut() {
    if (this.showSaveIcon) {
      this.showSaveIcon = false;
    }
  }
  @action
  mouseIn() {
    if (!this.showSaveIcon) {
      this.showSaveIcon = true;
    }
  }
}
