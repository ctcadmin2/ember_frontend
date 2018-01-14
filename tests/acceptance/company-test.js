import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import startApp from 'frontend/tests/helpers/start-app';
import destroyApp from 'frontend/tests/helpers/destroy-app';
import {
  invalidateSession ,
  authenticateSession
} from 'frontend/tests/helpers/ember-simple-auth';

describe('Acceptance | companies', function() {
  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  it('redirect to login when not auth', function() {
    invalidateSession(application);
    visit('/companies');

    return andThen(() => {
      expect(currentURL()).to.equal('/login');
    });
  });

  it('show companies table when auth', function() {
    authenticateSession(application);
    server.createList('company', 5);
    visit('/companies');

    return andThen(() => {
      expect(find('thead tr').length).to.equal(1);
    })
  })
});
