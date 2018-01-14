import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({
  email: attr('string'),
  password: attr('string'),
  password_confirmation: attr('string'),
  first_name: attr('string'),
  last_name: attr('string'),
  ssn: attr('string'),
  lang: attr('string'),
  admin: attr('boolean'),
  active: attr('boolean')
});
