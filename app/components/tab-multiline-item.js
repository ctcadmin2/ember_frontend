import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class TabMultilineItem extends Component {
  @tracked value = "";
  @tracked addMode = false;
  @tracked showSaveIcon = false;

  @action
  removeItem(item) {
    this.args.list.removeObject(item);
    this.args.updateData(this.args.category, this.args.list);
  }
  @action
  addItem(e) {
    e.stopPropagation();

    if (e.type === "keyup" && e.keyCode !== 13) {
      return;
    }

    this.args.list.pushObject(this.value);
    this.args.updateData(this.args.category, this.args.list);

    this.addMode = false;
    this.value = "";
  }

  @action
  addModeToggle() {
    if (this.addMode === false) {
      this.addMode = true;
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
