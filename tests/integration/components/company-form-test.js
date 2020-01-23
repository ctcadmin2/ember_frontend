import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";
import { setupMirage } from "ember-cli-mirage/test-support";
import stubbedService from "frontend/tests/helpers/stub-service";

module("Integration | Component | company-form", function(hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    let company = this.server.create("company");
    this.set("company", company);

    stubbedService("countries", {
      dataFetched: true,
      list: [
        {
          name: "Romania",
          value: "RO"
        },
        {
          name: "Denmark",
          value: "DK"
        }
      ]
    });
  });

  test("it renders", async function(assert) {
    await render(hbs`<CompanyForm @data={{this.company}} />`);

    assert
      .dom(".inline.field")
      .exists({ count: 13 }, "All fields are displayed");
    assert
      .dom("[id*=name]")
      .hasValue(this.company.name, "Input field is properly updated");
    assert
      .dom(".dropdown .menu .item")
      .exists({ count: 2 }, "Select is created from valid array");
  });

  test("show should have disable input", async function(assert) {
    await render(
      hbs`<CompanyForm @data={{this.company}} @inputDisabled={{true}} />`
    );

    assert
      .dom(":disabled")
      .exists({ count: 12 }, "all input fields are disabled");
    assert.dom(".dropdown.disabled").exists({ count: 1 }, "select is disabled");
  });
});
