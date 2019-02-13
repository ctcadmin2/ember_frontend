import Component from '@ember/component';
import { set } from '@ember/object';

export default Component.extend({
  classNames: 'ui item',
  showDeleteIcon: false,

  mouseEnter() {
    if (!this.showEditMode) {
      set(this, 'showDeleteIcon', true);
    }
  },

  mouseLeave() {
    if (!this.showEditMode) {
      set(this, 'showDeleteIcon', false);
    }
  },

  actions: {
    remove() {
      this.deleteItem(this.item);
    }
  }
});
