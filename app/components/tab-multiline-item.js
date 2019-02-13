import Component from '@ember/component';
import { set, get } from '@ember/object';

export default Component.extend({
  classNames: 'ui item',
  value: '',
  editMode: false,
  showSaveIcon: false,

  actions: {
    removeItem(item) {
      get(this, 'list').removeObject(item);
      this.updateData(this.category, this.list);
    },
    addItem(e) {
      e.stopPropagation();

      get(this, 'list').pushObject(this.value);
      this.updateData(this.category, this.list);

      set(this, 'editMode', false);
      set(this, 'value', '');
    },

    addMode() {
      if (this.editMode == false) {
        set(this, 'editMode', true);
      }
    },

    mouseOut() {
      if (this.showSaveIcon) {
        set(this, 'showSaveIcon', false);
      }
    },
    mouseIn() {
      if (!this.showSaveIcon) {
        set(this, 'showSaveIcon', true);
      }
    }
  }
});
