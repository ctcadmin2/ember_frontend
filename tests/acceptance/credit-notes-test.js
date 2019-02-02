import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirageTest from 'ember-cli-mirage/test-support/setup-mirage';
import {
  authenticateSession,
  invalidateSession
} from 'ember-simple-auth/test-support';

module('Acceptance | credit notes', function(hooks) {
  setupApplicationTest(hooks);
  setupMirageTest(hooks);

  test('redirects to login when not auth', async function(assert) {
    await invalidateSession();
    await visit('/credit-notes');
    assert.equal(currentURL(), '/login');
  });

  test('shows table when auth', async function(assert) {
    await authenticateSession({
      token:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImFkbWluIjp0cnVlfQ.hgNSDI7STvbPMw4dJky55hUpUy5jriNIrLwp5dW3awg'
    });
    this.server.create('user');
    this.server.createList('credit-note', 5);
    await visit('/credit-notes');
    assert.equal(currentURL(), '/credit-notes');
    assert.dom('tbody tr').exists({ count: 5 });
  });

  test('no pagination if less than 5 elements', async function(assert) {
    await authenticateSession({
      token:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImFkbWluIjp0cnVlfQ.hgNSDI7STvbPMw4dJky55hUpUy5jriNIrLwp5dW3awg'
    });
    this.server.create('user');
    this.server.createList('credit-note', 5);

    await visit('/credit-notes');

    assert
      .dom('.pagination')
      .doesNotExist('no pagination if less than six elements');
  });

  test('show pagination if more than 5 elements', async function(assert) {
    await authenticateSession({
      token:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImFkbWluIjp0cnVlfQ.hgNSDI7STvbPMw4dJky55hUpUy5jriNIrLwp5dW3awg'
    });
    this.server.create('user');
    this.server.createList('credit-note', 6);

    await visit('/credit-notes');

    assert.dom('.pagination').exists();
  });
});
