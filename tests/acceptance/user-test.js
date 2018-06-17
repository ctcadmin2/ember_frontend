import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { invalidateSession } from 'ember-simple-auth/test-support';

module('Acceptance | user', function(hooks) {
  setupApplicationTest(hooks);

  test('can visit /users', async function(assert) {
    await invalidateSession();
    await visit('/users');
    assert.equal(currentURL(), '/login');
  });
});
