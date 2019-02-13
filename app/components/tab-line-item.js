import Component from '@ember/component';
import { set } from '@ember/object';
import { equal } from '@ember/object/computed';

export default Component.extend({
  classNames: 'ui item',
  showEditIcon: false,
  showEditMode: false,
  focused: false,
  textarea: equal('type', 'textarea'),

  mouseEnter() {
    if (!this.showEditMode) {
      set(this, 'showEditIcon', true);
    }
  },

  mouseLeave() {
    if (!this.showEditMode) {
      set(this, 'showEditIcon', false);
    }
  },
  click() {
    if (this.showEditMode && !this.focused) {
      set(this, 'showEditMode', false);
    } else if (this.focused) {
      set(this, 'focused', false);
    } else {
      set(this, 'showEditMode', true);
    }
  },
  focusOut() {
    this.saveData(this.prop, this.value);
  },

  actions: {
    inputFocused() {
      set(this, 'focused', true);
    }
  }
});
