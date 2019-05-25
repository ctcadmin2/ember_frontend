import DS from "ember-data";

const { attr, hasMany } = DS;

export default DS.Model.extend({
  vin: attr("string"),
  registration: attr("string"),
  category: attr("string"),
  sold: attr("boolean"),
  creditNotes: hasMany("credit-note")
});
