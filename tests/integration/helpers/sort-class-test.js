import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | sort-class', function(hooks) {
  setupRenderingTest(hooks);

  test('ascending', async function(assert) {
    this.set('sort', '1234');
    this.set('name', '1234');

    await render(hbs`{{sort-class sort name}}`);
    assert.equal(
      this.element.textContent.trim(),
      'sorted ascending icon',
      'sorting ascending'
    );
  });

  test('sort descending', async function(assert) {
    this.set('sort', '-1234');
    this.set('name', '1234');

    await render(hbs`{{sort-class sort name}}`);
    assert.equal(
      this.element.textContent.trim(),
      'sorted descending icon',
      'sorting descending'
    );
  });
});
