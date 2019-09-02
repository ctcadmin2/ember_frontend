import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | sortable-header", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set("sort", "value");
    this.set("name", "value");
    this.set("setSort", function() {});

    // Usage:
    // <SortableHeader
    //   @sort={{this.sort}}
    //   @prop="name"
    //   @setSort={{action "setSort"}}
    // >
    //  yielded text
    // </SortableHeader>

    await render(hbs`
      <SortableHeader
        @sort={{this.sort}}
        @prop={{this.name}}
        @setSort={{action this.setSort}}
      > 
        {{t "test"}}
      </SortableHeader>
    `);

    assert.equal(this.element.textContent.trim(), "TEST");
  });
});
