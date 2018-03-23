import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import startApp from 'frontend/tests/helpers/start-app';
import destroyApp from 'frontend/tests/helpers/destroy-app';

describe('Acceptance | users', function() {
  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  it('can visit /users', function() {
    visit('/users');

    return andThen(() => {
      expect(currentURL()).to.equal('/users');
    });
  });
});
