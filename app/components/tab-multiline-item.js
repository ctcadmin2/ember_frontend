import Component from "@ember/component";
import { set, action } from "@ember/object";

export default class TabMultilineItem extends Component {
  classNames = ["ui", "item"];
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

    set(this, "editMode", false);
    set(this, "value", "");
  }
  @action
  addMode() {
    if (this.editMode === false) {
      set(this, "editMode", true);
    }
  }
  @action
  mouseOut() {
    if (this.showSaveIcon) {
      set(this, "showSaveIcon", false);
    }
  }
  @action
  mouseIn() {
    if (!this.showSaveIcon) {
      set(this, "showSaveIcon", true);
    }
  }
}
