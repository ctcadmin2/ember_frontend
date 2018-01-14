import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | pagination list', function() {
  setupComponentTest('pagination-list', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#pagination-list}}
    //     template content
    //   {{/pagination-list}}
    // `);

    this.render(hbs`{{pagination-list}}`);
    expect(this.$()).to.have.length(1);
  });
});
