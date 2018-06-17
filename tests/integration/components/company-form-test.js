import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import setupMirageTest from 'ember-cli-mirage/test-support/setup-mirage';
import stubbedService from 'frontend/tests/helpers/stub-service';

module('Integration | Component | company-form', function(hooks) {
  setupRenderingTest(hooks);
  setupMirageTest(hooks);

  hooks.beforeEach(function() {
    let company = this.server.create('company');
    this.set('company', company);

    stubbedService('countries', {
      dataFetched: true,
      list: [
        {
          name: 'Romania',
          value: 'RO'
        },
        {
          name: 'Denmark',
          value: 'DK'
        }
      ],
      init() {},
      _setList() {}
    });
  });

  test('it renders', async function(assert) {
    await render(hbs`{{company-form data=company}}`);

    assert.equal(
      findAll('.inline.field').length,
      13,
      'All fields are displayed'
    );
    assert.equal(
      find('[id*=name]').value,
      this.get('company').name,
      'Input field is properly updated'
    );
    assert.equal(
      findAll('.dropdown .menu .item').length,
      2,
      'Select is created from valid array'
    );
  });

  test('show should have disable input', async function(assert) {
    await render(hbs`{{company-form data=company inputDisabled=true}}`);

    assert.equal(
      findAll(':disabled').length,
      12,
      'all input fields are disabled'
    );
    assert.equal(findAll('.dropdown.disabled').length, 1, 'select is disabled');
  });
});
