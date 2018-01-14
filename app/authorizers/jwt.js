import Base from 'ember-simple-auth/authorizers/base';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import Ember from 'ember';

export default Base.extend({
  session: service(),
  authorize(data, block) {
    if (Ember.testing) {
      block('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImFkbWluIjp0cnVlfQ.hgNSDI7STvbPMw4dJky55hUpUy5jriNIrLwp5dW3awg');
    }
    const { token } = data;
    if (get(this, 'session.isAuthenticated') && token) {
      block('Authorization', `Bearer ${token}`);
    }
  }
});
