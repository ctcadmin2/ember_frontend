import Service, { inject as service } from '@ember/service';
import { get, set } from '@ember/object';
import fetchData from '../utils/fetch-data';

export default Service.extend({
  list: null,
  dataFetched: false,
  url: '/api_helpers/countries.json',
  session: service(),

  init() {
    this._super(...arguments);
    set(
      this,
      'fetch',
      fetchData(this.url, get(this, 'session').data.authenticated.token)
    );
    this._setlist();
  },

  //private
  _setlist() {
    let f = this.fetch;
    f.then(list => this._successCallback(list)).catch(() =>
      set(this, 'list', { error: 'error' })
    );
  },
  _successCallback(list) {
    set(this, 'list', list);
    set(this, 'dataFetched', true);
  }
});
