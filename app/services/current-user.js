import Service, {inject as service} from '@ember/service';
import { get, set } from '@ember/object';
import { isEmpty } from "@ember/utils";
import jwtDecode from 'ember-cli-jwt-decode';

export default Service.extend({
  session: service(),
  store: service(),
  user: null,

  init() {
    const token = get(this, 'session.data.authenticated.token');
    if (!isEmpty(token)) {
      const userId = this.getUserIdFromToken(token);
      get(this, 'store').find('user', userId).then(
        user => set(this, 'user', user)
      );
    }
  },

  getUserIdFromToken(token) {
    const tokenData = jwtDecode(token);
    return tokenData['sub'];
  }
});
