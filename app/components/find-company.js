import Ember from 'ember';

export default Ember.Component.extend({
  country: "RO",
  cif: null,

  actions: {
    findCompany() {
      console.log(`we have ${this.get('country')} and ${this.get('cif')}`);
    }
  },

  //private
  _openApi() {

  },
  _vies() {

  }
});
