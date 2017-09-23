import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page', 'size'],
  page: 1,
  size: 5,

  actions: {
    changeSize() {
      this.set('size', 1);
    }
  }
});
