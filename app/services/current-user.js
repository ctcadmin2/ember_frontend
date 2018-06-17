import Service, { inject as service } from '@ember/service';
import { get, set } from '@ember/object';
import { isEmpty } from '@ember/utils';
import jwtDecode from 'ember-cli-jwt-decode';
import RSVP from 'rsvp';

export default Service.extend({
  session: service(),
  store: service(),
  load() {
    const token = get(this, 'session.data.authenticated.token');
    if (!isEmpty(token)) {
      let userId = this.getUserIdFromToken(token);
      return get(this, 'store')
        .findRecord('user', userId)
        .then(user => set(this, 'user', user));
    } else {
      return RSVP.resolve;
    }
  },

  getUserIdFromToken(token) {
    const tokenData = jwtDecode(token);
    return tokenData['sub'];
  }
});
