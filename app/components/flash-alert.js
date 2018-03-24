import Component from '@ember/component';
import { get, computed } from '@ember/object';

export default Component.extend({
  statusClass: computed('flash', function() {
    if (get(this, 'flash.type') === 'success') {
      return 'checkmark';
    } else {
      return 'remove';
    }
  }),
  actions: {
    closeButton() {
      this.$('.message').transition('slide right');
    }
  }
});
