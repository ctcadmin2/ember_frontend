import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, find, fillIn, click } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";
import stubbedService from "frontend/tests/helpers/stub-service";

module("Integration | Component | find-company", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    stubbedService("countries", {
      dataFetched: true,
      list: [
        { name: "Romania", value: "RO" },
        { name: "Denmark", value: "DK" }
      ]
    });
    this.set("testFunction", function() {});
    await render(hbs`<FindCompany @returnData={{fn this.testFunction}} />`);
    assert.dom(".form").exists("The form is displayed");
  });

  test("dropdown creation", async function(assert) {
    stubbedService("countries", {
      dataFetched: true,
      list: [
        { name: "Romania", value: "RO" },
        { name: "Denmark", value: "DK" }
      ]
    });
    this.set("testFunction", function() {});
    await render(hbs`<FindCompany @returnData={{fn this.testFunction}} />`);

    assert.dom(".dropdown").exists("The select is created");
    assert.equal(find(".menu").children.length, 2, "Create 2 elements");
    assert.equal(
      find(".active").dataset.value,
      "RO",
      "First country in select is Romania"
    );
  });

  test("button disable", async function(assert) {
    stubbedService("countries", {
      dataFetched: true,
      list: [
        { name: "Romania", value: "RO" },
        { name: "Denmark", value: "DK" }
      ]
    });
    this.set("testFunction", function() {});

    await render(hbs`<FindCompany @returnData={{fn this.testFunction}} />`);

    assert
      .dom("button")
      .isDisabled("Search should be disabled with empty cif.");

    await fillIn("input", 1);
    assert
      .dom("button")
      .isNotDisabled("Search should be enabled when cif is not blank.");

    await click("button");
    assert
      .dom("button")
      .isDisabled("Search should be disabled when searching.");

    await fillIn("input", 11111);
    assert
      .dom("button")
      .isNotDisabled("Search should be reenabled on cif changed.");

    await fillIn("input", "");
    assert
      .dom("button")
      .isDisabled("Search should be disabled if cif is cleared.");
  });

  test("message alerts", async function(assert) {
    stubbedService("countries", {
      dataFetched: true,
      list: [
        { name: "Romania", value: "RO" },
        { name: "Denmark", value: "DK" }
      ]
    });

    stubbedService("companyInfo", {
      checkOpenApi() {
        return {
          data: {
            name: "openapi S.R.L.",
            registration: "J00/0000/0000",
            cif: "0123456789",
            address: "on the moon",
            country: "RO",
            phone: "555-12345",
            status: true
          }
        };
      }
    });

    this.set("testFunction", function() {});

    await render(hbs`<FindCompany @returnData={{fn this.testFunction}} />`);

    await fillIn("input", 1);
    await click("button");
    assert
      .dom(".form.success")
      .exists("Display success message if company was found.");
  });
});
