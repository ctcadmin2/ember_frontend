import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Helper | route-name-helper', function() {
  setupComponentTest('route-name-helper', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#route-name-helper}}
    //     template content
    //   {{/route-name-helper}}
    // `);
    this.set('inputValue', '1234');

    this.render(hbs`{{route-name-helper inputValue}}`);

    expect(this.$().text().trim()).to.equal('1234');
  });
});

