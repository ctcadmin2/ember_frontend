import Model, { attr, belongsTo, hasMany } from "@ember-data/model";

export default class CreditInvoice extends Model {
  @attr("number")
  number;
  @attr("date")
  date;
  @attr("number")
  totalValue;
  @attr("string")
  taxRate;
  @attr("string")
  currency;
  @belongsTo("company")
  company;
  @hasMany("credit-note")
  creditNotes;
  @attr()
  extra;
  @attr()
  contact;
}
