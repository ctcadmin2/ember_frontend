import Model, { attr, hasMany } from "@ember-data/model";

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
