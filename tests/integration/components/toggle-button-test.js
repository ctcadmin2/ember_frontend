import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, click } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

import EmberObject from "@ember/object";

module("Integration | Component | toggle-button", function(hooks) {
  setupRenderingTest(hooks);

  // {{toggle-button obj=user prop='active' updateObj=(action 'updateFunction')}}

  test("it renders", async function(assert) {
    let user = EmberObject.create({
      active: false,
      save() {}
    });

    this.set("user", user);
    this.set("updateFunction", function() {});

    await render(
      hbs`<ToggleButton @obj={{this.user}} @prop="active" @updateObj={{this.updateFunction}}/>`
    );
    assert.dom("button").hasText("Inactive");
    assert.dom("button").hasClass("red");

    await click("button");
    assert.dom("button").hasText("Active");
    assert.dom("button").hasClass("green");

    await click("button");
    assert.dom("button").hasText("Inactive");
    assert.dom("button").hasClass("red");
  });
});
