import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | toggle-button', function() {
  setupComponentTest('toggle-button', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#toggle-button}}
    //     template content
    //   {{/toggle-button}}
    // `);

    this.render(hbs`{{toggle-button}}`);
    expect(this.$()).to.have.length(1);
  });
});
