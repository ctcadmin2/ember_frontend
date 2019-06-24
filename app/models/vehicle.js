import DS from "ember-data";

const { attr, hasMany, Model } = DS;

export default class Vehicle extends Model {
  @attr("string")
  vin;
  @attr("string")
  registration;
  @attr("string")
  category;
  @attr("boolean")
  sold;
  @hasMany("credit-note")
  creditNotes;
}
