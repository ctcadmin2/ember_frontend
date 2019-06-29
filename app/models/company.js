import Model, { attr } from "@ember-data/model";

export default class Company extends Model {
  @attr("string")
  name;
  @attr("string")
  registration;
  @attr("string")
  cif;
  @attr("string")
  address;
  @attr("string")
  acc_eur;
  @attr("string")
  acc_ron;
  @attr("string")
  bank;
  @attr("string")
  capital;
  @attr("string")
  phone;
  @attr("string")
  email;
  @attr("string")
  contact;
  @attr("string")
  country;
  @attr("boolean")
  vies;
  @attr("boolean")
  status;
}
