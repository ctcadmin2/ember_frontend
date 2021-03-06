import EmberRouter from '@ember/routing/router';
import config from 'frontend/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route("home", { path: "/" });
  this.route("login");
  this.route("registration");
  this.route("settings");

  this.route("companies", function() {
    this.route("new");
    this.route("show", { path: "/:company_id" });
    this.route("edit", { path: "/:company_id/edit" });
  });

  this.route("users", function() {
    this.route("edit", { path: "/:user_id/edit" });
  });

  this.route("vehicles", function() {
    this.route("new");
    this.route("edit", { path: "/:vehicle_id" });
    this.route("vehicle", { path: "/:vehicle_id" }, function() {
      this.route("credit-notes");
      this.route("events");
      // this.route('events'); TODO add events
    });
    this.route("new");
    this.route("edit", { path: "/:vehicle_id/edit" });
  });

  this.route("credit-notes", function() {
    this.route("new");
    this.route("edit", { path: "/:credit_note_id/edit" });
  });
  this.route("credit-invoices", function() {
    this.route("new");
    this.route("edit", { path: "/:credit_invoice_id/edit" });
  });
});
