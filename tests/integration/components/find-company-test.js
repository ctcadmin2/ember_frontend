import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | find company', function() {
  setupComponentTest('find-company', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#find-company}}
    //     template content
    //   {{/find-company}}
    // `);

    this.render(hbs`{{find-company}}`);
    expect(this.$()).to.have.length(1);
  });
});
