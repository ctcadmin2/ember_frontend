import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Helper | sort class', function() {
  setupComponentTest('sort-class', {
    integration: true
  });

  it('adds class for sorting ascending', function() {
    this.set('sort', 'name');

    this.render(hbs`{{sort-class sort 'name'}}`);

    expect(this.$().text().trim()).to.equal('sorted ascending icon');
  });

  it('adds class for sorting descending', function() {
    this.set('sort', '-name');

    this.render(hbs`{{sort-class sort 'name'}}`);

    expect(this.$().text().trim()).to.equal('sorted descending icon');
  });
});
