import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | credit-invoices', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:credit-invoices');
    assert.ok(route);
  });
});
