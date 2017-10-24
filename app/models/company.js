import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  registration: DS.attr('string'),
  cif: DS.attr('string'),
  address: DS.attr('string'),
  acc_eur: DS.attr('string'),
  acc_ron: DS.attr('string'),
  bank: DS.attr('string'),
  capital: DS.attr('string'),
  phone: DS.attr('string'),
  email: DS.attr('string'),
  contact: DS.attr('string'),
  country: DS.attr('string'),
  vies: DS.attr('boolean'),
  status: DS.attr('boolean'),
});
