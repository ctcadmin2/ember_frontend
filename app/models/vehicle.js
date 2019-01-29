import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  vin: attr('string'),
  registration: attr('string'),
  type: attr('string'),
  active: attr('boolean'),
  creditNotes: hasMany('credit-note')
});
