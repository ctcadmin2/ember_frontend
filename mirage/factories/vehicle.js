import { Factory } from "ember-cli-mirage";
import faker from "faker";
faker.seed(123);

export default Factory.extend({
  vin() {
    return faker.random.alphaNumeric();
  },
  registration() {
    return faker.random.number();
  },
  type() {
    return faker.random.number();
  },
  active() {
    return faker.random.boolean();
  },

  afterCreate(vehicle, server) {
    server.createList("creditNote", 10, { vehicle });
  }
});
