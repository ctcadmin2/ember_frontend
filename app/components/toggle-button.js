import Component from '@ember/component';

export default Component.extend({
  tagName: '',

  actions: {
    toggleObj(obj, prop) {
      obj.toggleProperty(prop);
      this.updateObj(obj);
    }
  }
});
