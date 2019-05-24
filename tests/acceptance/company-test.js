import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit, currentURL } from '@ember/test-helpers';
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
    this.server.create('user');
    this.server.createList('company', 5);
    await authenticateSession({
      jwt:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImFkbWluIjp0cnVlfQ.hgNSDI7STvbPMw4dJky55hUpUy5jriNIrLwp5dW3awg'
    });
    await visit('/companies');

    assert.equal(currentURL(), '/companies');
    assert.dom('tbody tr').exists({ count: 5 });
  });

  test('no pagination if less than 5 elements', async function(assert) {
    this.server.create('user');
    this.server.createList('company', 5);
    await authenticateSession({
      jwt:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImFkbWluIjp0cnVlfQ.hgNSDI7STvbPMw4dJky55hUpUy5jriNIrLwp5dW3awg'
    });
    await visit('/companies');

    assert
      .dom('.pagination')
      .doesNotExist('no pagination if less than six elements');
  });

  test('show pagination if more than 5 elements', async function(assert) {
    this.server.create('user');
    this.server.createList('company', 6);
    await authenticateSession({
      jwt:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImFkbWluIjp0cnVlfQ.hgNSDI7STvbPMw4dJky55hUpUy5jriNIrLwp5dW3awg'
    });

    await visit('/companies');
    assert.dom('.pagination').exists();
  });
});
