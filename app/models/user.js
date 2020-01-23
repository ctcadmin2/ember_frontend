import Model, { attr } from "@ember-data/model";

export default class User extends Model {
  @attr("string")
  email;
  @attr("string")
  password;
  @attr("string")
  passwordConfirmation;
  @attr("string")
  firstName;
  @attr("string")
  lastName;
  @attr("string")
  ssn;
  @attr("string")
  lang;
  @attr("boolean")
  admin;
  @attr("boolean")
  active;

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
