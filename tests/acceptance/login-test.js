import { module, test } from "qunit";
import { setupApplicationTest } from "ember-qunit";
import { visit, currentURL, click, fillIn } from "@ember/test-helpers";
import { get } from "@ember/object";
import { setupMirage } from "ember-cli-mirage/test-support";
import {
  authenticateSession,
  invalidateSession,
  currentSession
} from "ember-simple-auth/test-support";

module("Acceptance | login", function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test("If a user is not logged in, they see a login form", async function(assert) {
    await invalidateSession();
    await visit("/");
    assert.equal(
      currentURL(),
      "/login",
      "not auth user is redirected to login"
    );
    assert.dom("#loginForm").exists();
  });

  test("if a user is logged in, they see a logout button", async function(assert) {
    this.server.create("user", { id: 1 });
    await authenticateSession({
      jwt:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImFkbWluIjp0cnVlfQ.hgNSDI7STvbPMw4dJky55hUpUy5jriNIrLwp5dW3awg"
    });

    await visit("/companies");
    assert.equal(currentURL(), "/companies");
    assert.dom("#logoutBtn").exists();
  });

  test("a authed user not should see the login form", async function(assert) {
    this.server.create("user", { id: 1 });
    await authenticateSession({
      jwt:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImFkbWluIjp0cnVlfQ.hgNSDI7STvbPMw4dJky55hUpUy5jriNIrLwp5dW3awg"
    });
    await visit("/");

    assert.equal(currentURL(), "/");
    assert.dom("#loginForm").doesNotExist();
    await visit("/login");
    assert.equal(currentURL(), "/");
  });

  test("user can login", async function(assert) {
    this.server.create("user", {
      id: 1,
      email: "sega@test.com",
      password: "test1234",
      active: true
    });
    await invalidateSession();

    await visit("/companies");
    assert.equal(currentURL(), "/login");

    await fillIn("#email", "sega@test.com");
    await fillIn("#password", "test1234");
    await click(".submit.button"); // can't login if start from login page
    await visit("/companies");
    assert.equal(currentURL(), "/companies");

    assert.dom(".success.message").exists();

    const sesh = currentSession();
    const isAuthed = get(sesh, "isAuthenticated");
    assert.ok(isAuthed);
  });

  test("user can logout", async function(assert) {
    this.server.create("user");
    await authenticateSession({
      jwt:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImFkbWluIjp0cnVlfQ.hgNSDI7STvbPMw4dJky55hUpUy5jriNIrLwp5dW3awg"
    });
    await visit("/companies");
    await click("#logoutBtn");

    const sesh = currentSession();
    const isAuthed = get(sesh, "isAuthenticated");

    assert.notOk(isAuthed);
  });

  test("If a user puts in the wrong login credentials, they see a login error", async function(assert) {
    this.server.logging = true;
    await visit("/login");
    await fillIn("#email", "lester@test.com");
    await fillIn("#password", "wrongPassword");
    await click(".submit.button");

    const sesh = currentSession();
    assert.equal(
      sesh.isAuthenticated,
      false,
      "User submits bad email and password, fails"
    );
    await visit("/");
    assert.equal(currentURL(), "/login", "We are kept at login page");
    assert.dom(".error.message").exists();
    assert.dom("#loginForm").exists();
  });

  test("User not activated", async function(assert) {
    this.server.logging = true;
    this.server.create("user", {
      id: 1,
      email: "sega@test.com",
      password: "notActive",
      active: false
    });

    await visit("/login");
    await fillIn("#email", "sega@test.com");
    await fillIn("#password", "notActive");
    await click(".submit.button");

    const sesh = currentSession();
    assert.equal(
      sesh.isAuthenticated,
      false,
      "User is not activated, authentication fails"
    );
    await visit("/");
    assert.equal(currentURL(), "/login", "We are kept at login page");
    assert.dom(".info.message").exists();
    assert.dom("#loginForm").exists();
  });
});
