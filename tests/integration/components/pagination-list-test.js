import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | pagination-list', function(hooks) {
  setupRenderingTest(hooks);

  // {{pagination-list model=companies page=page}}

  test('it renders', async function(assert) {
    await render(hbs`{{pagination-list}}`);

    assert.dom(this.element).hasText('');
  });
});
