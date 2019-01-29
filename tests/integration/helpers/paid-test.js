import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | paid', function(hooks) {
  setupRenderingTest(hooks);

  // if true show checkmark icon
  test('it renders', async function(assert) {
    await render(hbs`{{paid true}}`);

    assert.equal(this.element.textContent.trim(), 'check icon');
  });
  // if false show X icon
  test('it renders', async function(assert) {
    await render(hbs`{{paid false}}`);

    assert.equal(this.element.textContent.trim(), 'close icon');
  });
});
