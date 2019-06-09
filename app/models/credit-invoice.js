import DS from "ember-data";
const { Model, attr } = DS;

export default Model.extend({
  number: attr("number"),
  date: attr("date"),
  total_value: attr("number")
});
