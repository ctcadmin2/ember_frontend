import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Route.extend(ApplicationRouteMixin, {
  currentUser: service(),
  routeAfterAuthentication: 'main',

  beforeModel() {
    return this._loadCurrentUser();
  },
  sessionAuthenticated() {
    this._super(...arguments);
    this._loadCurrentUser();
  },

  // private
  _loadCurrentUser() {
    return get(this, 'currentUser').load();
    // .catch(() => this.get('session').invalidate());
  }
});
