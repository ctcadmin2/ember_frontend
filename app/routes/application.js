import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import { inject as service } from '@ember/service';

export default Route.extend(ApplicationRouteMixin, {
  currentUser: service(),
  intl: service(),
  routeAfterAuthentication: '/',

  beforeModel() {
    return this._loadCurrentUser();
  },
  sessionAuthenticated() {
    /** transition might be triggered before load of current user is resolved
        https://github.com/simplabs/ember-simple-auth/issues/1838
    */
    this._super(...arguments);
    this._loadCurrentUser();
  },

  // private
  /**
   * Loads current user in the application route and set the language according to user settings
   * @method _loadCurrentUser
   */
  _loadCurrentUser() {
    return this.currentUser
      .load()
      .then(resp => this.get('intl').setLocale([resp.lang]))
      .catch(() => this.get('session').invalidate());
  }
});
