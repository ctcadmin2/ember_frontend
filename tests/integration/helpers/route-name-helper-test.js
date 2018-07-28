import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | route-name-helper', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{route-name-helper 'companies' 'index'}}`);

    assert.equal(this.element.textContent.trim(), 'companies.index');
  });
});
