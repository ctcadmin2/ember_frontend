import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class MultilineItem extends Component {
  classNames = ["ui", "item"];
  showDeleteIcon = false;

  mouseEnter() {
    if (!this.showEditMode) {
      this.showDeleteIcon = true;
    }
  }

  mouseLeave() {
    if (!this.showEditMode) {
      this.showDeleteIcon = false;
    }
  }

  @action
  remove() {
    this.deleteItem(this.item);
  }
}
