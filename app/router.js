import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', { path: '/' });
  this.route('login');
  this.route('registration');
  this.route('companies', function() {
    this.route('new');
    this.route('show', { path: '/:company_id' });
    this.route('edit', { path: '/:company_id/edit' });
  });
  this.route('users', function() {
    this.route('edit', { path: '/:user_id/edit' });
  });
  this.route('vehicles', function() {
    this.route('new'), this.route('edit', { path: '/:vehicle_id' });
    this.route('vehicle', { path: '/:vehicle_id' }, function() {
      this.route('credit-notes');
      this.route('events');
      // this.route('events'); TODO add events
    });
    this.route('new');
    this.route('edit', { path: '/:vehicle_id/edit' });
  });
  this.route('credit-notes', function() {
    this.route('new');
    this.route('edit', { path: '/:credit_note_id/edit' });
  });

  this.route('vehicle', function() {});
});

export default Router;
