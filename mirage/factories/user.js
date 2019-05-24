import { Factory } from "ember-cli-mirage";
import faker from "faker";
faker.seed(123);

export default Factory.extend({
  email() {
    return faker.internet.email();
  },
  firstName() {
    return faker.name.firstName();
  },
  lastName() {
    return faker.name.lastName();
  },
  ssn() {
    return faker.random.number();
  },
  lang: "ro-ro",
  admin: true,
  active: false
});
