import Component from '@ember/component';
import { get, computed } from '@ember/object';
import $ from 'jquery';

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
      $('.message').transition('slide right');
    }
  }
});
