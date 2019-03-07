import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import { inject as service } from '@ember/service';

export default Route.extend(ApplicationRouteMixin, {
  currentUser: service(),
  intl: service(),
  routeAfterAuthentication: 'main',

  beforeModel() {
    this._loadCurrentUser();
  },
  sessionAuthenticated() {
    this._super(...arguments);
    this._loadCurrentUser();
  },

  // private
  _loadCurrentUser() {
    return this.currentUser
      .load()
      .then(resp => this.get('intl').setLocale([resp.lang]))
      .catch(() => this.get('session').invalidate());
  }
});
