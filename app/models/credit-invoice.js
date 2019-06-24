import DS from "ember-data";
const { Model, attr } = DS;

export default class CreditInvoice extends Model {
  @attr("number")
  number;
  @attr("date")
  date;
  @attr("number")
  total_value;
}
