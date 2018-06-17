import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import {
  visit,
  currentURL,
  find,
  findAll,
  click,
  fillIn
} from '@ember/test-helpers';
import { get } from '@ember/object';
import setupMirageTest from 'ember-cli-mirage/test-support/setup-mirage';
import {
  authenticateSession,
  invalidateSession,
  currentSession
} from 'ember-simple-auth/test-support';

module('Acceptance | login', function(hooks) {
  setupApplicationTest(hooks);
  setupMirageTest(hooks);

  test('If a user is not logged in, they see a login form', async function(assert) {
    await invalidateSession();
    await visit('/');
    assert.equal(
      currentURL(),
      '/login',
      'not auth user is redirected to login'
    );
    const loginFormPresent = find('#loginForm') == null ? false : true;
    assert.ok(loginFormPresent);
  });

  test('if a user is logged in, they see a logout button', async function(assert) {
    await authenticateSession();
    await visit('/');

    assert.equal(currentURL(), '/');

    const logoutBtnPresent = find('#logoutBtn') == null ? false : true;
    assert.ok(logoutBtnPresent);
  });

  test('a authed user not should see the login form', async function(assert) {
    await authenticateSession();
    await visit('/');

    assert.equal(currentURL(), '/');
    const loginFormPresent = find('#loginForm') == null ? false : true;
    assert.notOk(loginFormPresent);
  });

  test('user can login', async function(assert) {
    this.server.logging = true;
    this.server.create('user', {
      id: 1,
      email: 'sega@test.com',
      password: 'test1234',
      active: true
    });
    await invalidateSession();
    await visit('/companies');
    assert.equal(currentURL(), '/login');
    await fillIn('#email', 'sega@test.com');
    await fillIn('#password', 'test1234');
    await click('.submit.button'); // can't login if start from login page
    assert.equal(currentURL(), '/companies');
    assert.ok(find('.success.message'));
    const sesh = currentSession();
    const isAuthed = get(sesh, 'isAuthenticated');
    assert.ok(isAuthed);
  });

  test('user can logout', async function(assert) {
    this.server.create('user');
    await authenticateSession({
      token:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImFkbWluIjp0cnVlfQ.hgNSDI7STvbPMw4dJky55hUpUy5jriNIrLwp5dW3awg'
    });
    await visit('/companies');
    await click('#logoutBtn');

    const sesh = currentSession();
    const isAuthed = get(sesh, 'isAuthenticated');

    assert.notOk(isAuthed);
  });

  test('If a user puts in the wrong login credentials, they see a login error', async function(assert) {
    // await invalidateSession();
    await visit('/');

    // await fillIn('#email', 'lester@test.com');
    // await fillIn('#password', 'wrongPassword');
    await click('.submit.button');

    // const sesh = currentSession();
    // const isAuthed = get(sesh, 'isAuthenticated');
    // assert.equal(isAuthed, false, 'User submits bad email and password, fails');

    // const isShowingLoginFails =
    //   find('.message.error').length > 0 ? true : false;
    // assert.equal(
    //   isShowingLoginFails,
    //   true,
    //   'Shows user an error when they put in bad credentials'
    // );

    // const loginFormPresent = find('#loginForm').length > 0 ? true : false;
    // assert.equal(loginFormPresent, true, 'and we can still see the login form');

    assert.ok(find('.message'));
  });
});
