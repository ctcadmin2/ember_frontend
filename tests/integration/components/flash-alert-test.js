import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | flash alert', function() {
  setupComponentTest('flash-alert', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#flash-alert}}
    //     template content
    //   {{/flash-alert}}
    // `);

    this.render(hbs`{{flash-alert}}`);
    expect(this.$()).to.have.length(1);
  });
});
