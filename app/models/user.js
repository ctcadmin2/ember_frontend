import DS from "ember-data";
import { computed } from "@ember/object";

const { attr, Model } = DS;

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
  @computed("firstName", "lastName")
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
