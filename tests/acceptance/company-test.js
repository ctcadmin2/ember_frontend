import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit, currentURL, findAll } from '@ember/test-helpers';
import setupMirageTest from 'ember-cli-mirage/test-support/setup-mirage';
import {
  authenticateSession,
  invalidateSession
} from 'ember-simple-auth/test-support';

module('Acceptance | companies', function(hooks) {
  setupApplicationTest(hooks);
  setupMirageTest(hooks);

  test('redirects to login when not auth', async function(assert) {
    await invalidateSession();
    await visit('/companies');
    assert.equal(currentURL(), '/login');
  });

  test('shows companies table when auth', async function(assert) {
    await authenticateSession({
      token:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImFkbWluIjp0cnVlfQ.hgNSDI7STvbPMw4dJky55hUpUy5jriNIrLwp5dW3awg'
    });
    this.server.create('user');
    this.server.createList('company', 5);
    await visit('/companies');
    assert.equal(currentURL(), '/companies');
    assert.equal(findAll('tbody tr').length, 5);
  });
});
