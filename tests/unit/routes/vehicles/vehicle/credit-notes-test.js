import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | vehicles/vehicle/credit-notes', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:vehicles/vehicle/credit-notes');
    assert.ok(route);
  });
});
