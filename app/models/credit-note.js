import DS from "ember-data";

const { attr, belongsTo, Model } = DS;

export default class CreditNote extends Model {
  @attr("number")
  number;
  @attr("string")
  start;
  @attr("string")
  end;
  @attr("number")
  value;
  @attr("string")
  notes;
  @attr("boolean", { defaultValue: false })
  paid;
  @attr("string")
  currency;
  @belongsTo("vehicle")
  vehicle;
}
