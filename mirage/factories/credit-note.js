import { Factory, faker } from 'ember-cli-mirage';
faker.seed(123);

export default Factory.extend({
  number() {
    return faker.random.number();
  },
  start() {
    return faker.address.city();
  },
  end() {
    return faker.address.city();
  },
  value() {
    return faker.random.number();
  },
  notes() {
    return faker.lorem.sentence();
  },
  paid() {
    return faker.random.boolean();
  },
  currency() {
    return faker.finance.currencyCode();
  }
});
