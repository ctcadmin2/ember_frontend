import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import startApp from 'frontend/tests/helpers/start-app';
import destroyApp from 'frontend/tests/helpers/destroy-app';
import {
  currentSession,
  invalidateSession ,
  authenticateSession
} from 'frontend/tests/helpers/ember-simple-auth';
import { get } from '@ember/object';

describe('Acceptance | login', function() {
  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  it('If a user is not logged in, they see a login form', function() {
    invalidateSession(application);
    visit('/');

    return andThen(() => {
      const loginFormPresent = find('#loginForm').length > 0 ? true : false;
      expect(loginFormPresent).to.equal(true);
    })
  })

  it('if a user is logged in, they see a logout button', function() {
    authenticateSession(application);
    visit('/');

    return andThen(() => {
      expect(currentURL()).to.equal('/');
      const logoutBtnPresent = find('a').text('Logout').length > 0 ? true : false;
      expect(logoutBtnPresent).to.equal(true)
    })
  })

  it('a authed user not should see the login form', function() {
    authenticateSession(application);
    visit('/');

    return andThen(() => {
      expect(currentURL()).to.equal('/');
      const loginFormPresent = find('#loginForm').length > 0 ? true : false;
      expect(loginFormPresent).to.equal(false)
    })
  })

  // it('user can login', function() {
  //   invalidateSession(application);
  //   visit('/');
  //   fillIn('#email', 'lester@test.com');
  //   fillIn('#password', 'test1234');
  //   //click('.submit.button');
  //
  //   return andThen(() => {
  //     // const sesh = currentSession(application);
  //     // const isAuthed = get(sesh, 'isAuthenticated');
  //     // expect(isAuthed).to.equal(false);
  //     expect(1).to.equal(1);
  //   })
  // })

  it('user can logout', function() {
    authenticateSession(application);
    visit('/');
    click('.logoutBtn');

    return andThen(() => {
      const sesh = currentSession(application);
      const isAuthed = get(sesh, 'isAuthenticated');
      expect(isAuthed).to.equal(false);
    })
  })
})



//
//   andThen(() => {
//     const sesh = currentSession(this.application);
//     const isAuthed = get(sesh, 'isAuthenticated');
//     assert.equal(
//       isAuthed,
//       true,
//       'after a user submits good creds to login form, they are logged in'
//     );
//
//     const loginFormPresent = find('#loginForm').length > 0 ? true : false;
//     assert.equal(
//       loginFormPresent,
//       false,
//       'after we login, the login form disappears'
//     )
//   });
// });
//
// test('If a user puts in the wrong login credentials, they see a login error', function(assert) {
//   invalidateSession(this.application);
//   visit('/');
//
//   fillIn('#email', 'lester@test.com');
//   fillIn('#password', 'wrongPassword');
//   click('.submit.button');
//
//   andThen(() => {
//     const sesh = currentSession(this.application);
//     const isAuthed = get(sesh, 'isAuthenticated');
//     assert.equal(
//       isAuthed,
//       false,
//       'User submits bad email and password, fails'
//     );
//
//     const isShowingLoginFails = find('.message.error').length > 0 ? true : false;
//     assert.equal(
//       isShowingLoginFails,
//       true,
//       'Shows user an error when they put in bad credentials'
//     );
//
//     const loginFormPresent = find('#loginForm').length > 0 ? true : false;
//     assert.equal(
//       loginFormPresent,
//       true,
//       'and we can still see the login form'
//     )
//   });
// });
