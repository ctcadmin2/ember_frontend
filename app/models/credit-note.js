import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
  number: attr('number'),
  start: attr('string'),
  end: attr('string'),
  value: attr('number'),
  notes: attr('string'),
  paid: attr('boolean', { defaultValue: false }),
  currency: attr('string'),
  vehicle: belongsTo('vehicle')
});
