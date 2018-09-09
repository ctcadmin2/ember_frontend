import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | table-actions', function(hooks) {
  setupRenderingTest(hooks);

  // {{table-actions model=company deleteModel=(action 'destroyCompany')}}

  test('it renders', async function(assert) {
    this.set('disF', function() {});
    let company = {};
    this.set('company', company);

    await render(
      hbs`{{table-actions model=company deleteModel=(action disF)}}`
    );
    assert.dom(this.element).hasText('Show Edit Destroy');
  });
});
