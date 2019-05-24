import Service, { inject as service } from '@ember/service';
import { set } from '@ember/object';
import { isEmpty } from '@ember/utils';
import jwtDecode from 'ember-cli-jwt-decode';
import { reject } from 'rsvp';

export default Service.extend({
  session: service(),
  store: service(),
  user: null,

  /** Load current users info
   * @method load
   * @returns {Promise} Loads info from the store or returns an error
   */
  load() {
    let token;

    if (this.session.isAuthenticated) {
      token = this.session.data.authenticated.jwt;
    } else {
      return reject(new Error('User not auth.'));
    }

    if (!isEmpty(token)) {
      let userId = this._getUserIdFromToken(token);
      return this.store
        .findRecord('user', userId)
        .then(user => set(this, 'user', user));
    } else {
      return reject(new Error('Token is empty.'));
    }
  },

  //private
  /** Retrieve current users id from the token
   * @method _getUserIdFromToken
   * @param {String} token A valid jwt token
   * @returns {Integer} Current user Id
   */
  _getUserIdFromToken(token) {
    const tokenData = jwtDecode(token);
    return tokenData['sub'];
  }
});
