import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({
  name: attr('string'),
  registration: attr('string'),
  cif: attr('string'),
  address: attr('string'),
  acc_eur: attr('string'),
  acc_ron: attr('string'),
  bank: attr('string'),
  capital: attr('string'),
  phone: attr('string'),
  email: attr('string'),
  contact: attr('string'),
  country: attr('string'),
  vies: attr('boolean'),
  status: attr('boolean')
});
