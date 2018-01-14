import Component from '@ember/component';
import sweetAlert from 'ember-sweetalert';

export default Component.extend({
  actions: {
    deleteButton(id) {
      sweetAlert({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        allowEscapeKey: false,
        allowOutsideClick: false,
        focusCancel: true,
        confirmButtonClass: 'ui green large button',
        cancelButtonClass: 'ui red large button',
        confirmButtonText: 'Yes, delete it!',
        buttonsStyling: false
      }).then(
        () => this.deleteModel(id),
        () => this
      )
    }
  }
});
