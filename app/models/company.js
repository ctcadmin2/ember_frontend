import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  cif: DS.attr('string'),
  phone: DS.attr('string'),
  contact: DS.attr('string')
});
