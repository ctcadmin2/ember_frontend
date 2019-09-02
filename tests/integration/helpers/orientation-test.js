import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | orientation', function(hooks) {
  setupRenderingTest(hooks);

  test('returns up on truthy input', async function(assert) {
    this.set('inputValue', true);

    await render(hbs`{{orientation this.inputValue}}`);

    assert.equal(this.element.textContent.trim(), 'up');
  });

  test('returns down on falsy input', async function(assert) {
    this.set('inputValue', false);

    await render(hbs`{{orientation this.inputValue}}`);

    assert.equal(this.element.textContent.trim(), 'down');
  });
});
