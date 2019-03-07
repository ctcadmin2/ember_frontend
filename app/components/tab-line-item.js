import Component from '@ember/component';
import { set } from '@ember/object';
import { equal } from '@ember/object/computed';

export default Component.extend({
  classNames: 'ui item',
  showIcon: false,
  editMode: false,
  textarea: equal('inputType', 'textarea'),

  actions: {
    editMode() {
      if (!this.editMode) {
        set(this, 'editMode', true);
      }
    },
    mouseIn(e) {
      e.stopPropagation();
      set(this, 'showIcon', true);
    },

    mouseOut(e) {
      e.stopPropagation();
      set(this, 'showIcon', false);
    },
    saveChanges(e) {
      e.stopPropagation();
      this.saveData(this.prop, this.value);
      set(this, 'editMode', false);
    }
  }
});
