import { Factory, faker } from 'ember-cli-mirage';
faker.seed(123);

export default Factory.extend({
  name() {
    return faker.company.companyName();
  },
  registration() {
    return faker.company.bs();
  },
  cif() {
    return faker.random.number();
  },
  address() {
    return  faker.fake("{{address.streetAddress}}, {{address.county}} {{address.country}}");
  },
  phone() {
    return faker.phone.phoneNumber();
  },
  email() {
    return faker.internet.email();
  },
  contact() {
    return faker.fake("{{name.firstName}} {{name.lastName}}");
  },
  country() {
    return faker.address.countryCode();
  },
  vies: true,
  status: true,
});
