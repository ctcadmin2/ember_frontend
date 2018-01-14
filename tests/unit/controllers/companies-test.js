import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Controller | companies', function() {
  setupTest('controller:companies', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
    needs: ['service:session']
  });

  // Replace this with your real tests.
  it('exists', function() {
    let controller = this.subject();
    expect(controller).to.be.ok;
  });
});
