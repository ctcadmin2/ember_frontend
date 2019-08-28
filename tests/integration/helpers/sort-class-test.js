import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Helper | sort-class", function(hooks) {
  setupRenderingTest(hooks);

  test("ascending", async function(assert) {
    this.set("sort", "1234");
    this.set("name", "1234");

    await render(hbs`{{sort-class this.sort this.name}}`);
    assert.dom(this.element).hasText("sort up icon", "sorting ascending");
  });

  test("sort descending", async function(assert) {
    this.set("sort", "-1234");
    this.set("name", "1234");

    await render(hbs`{{sort-class this.sort this.name}}`);
    assert.dom(this.element).hasText("sort down icon", "sorting descending");
  });
});
