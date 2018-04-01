import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupApplicationTest } from 'ember-mocha';
import { visit, currentURL } from '@ember/test-helpers';

describe('Acceptance | user', function() {
  setupApplicationTest();

  it('can visit /', async function() {
    await visit('/');
    expect(currentURL()).to.equal('/');
  });
});