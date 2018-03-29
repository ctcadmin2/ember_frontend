import DS from 'ember-data';
import { computed, get } from '@ember/object';

const { attr } = DS;

export default DS.Model.extend({
  email: attr('string'),
  password: attr('string'),
  passwordConfirmation: attr('string'),
  firstName: attr('string'),
  lastName: attr('string'),
  ssn: attr('string'),
  lang: attr('string'),
  admin: attr('boolean'),
  active: attr('boolean'),

  fullName: computed('firstName', 'lastName', function() {
    return `${get(this, 'firstName')} ${get(this, 'lastName')}`;
  })
});
