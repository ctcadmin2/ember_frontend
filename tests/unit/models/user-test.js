import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';

module('Unit | Model | user', function(hooks) {
  setupTest(hooks);

  test('it checks proper full name', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = run(() =>
      store.createRecord('user', {
        firstName: 'sega',
        lastName: 'brolli'
      })
    );
    assert.equal(model.get('fullName'), 'sega brolli', 'full name is correct');
  });
});
