import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  tagName: '',
  store: service(),
  flashMessages: service(),

  actions: {
    toggleObj(id) {
      const model = this.get('store').peekRecord('user', id);
      model.toggleProperty('active');
      model
        .save()
        .then(this.flashMessages.success('User successfully updated!'));
    }
  }
});
