import Model, { attr } from "@ember-data/model";

export default class CreditInvoice extends Model {
  @attr("number")
  number;
  @attr("date")
  date;
  @attr("number")
  total_value;
}
