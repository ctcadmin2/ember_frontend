import Service, {inject as service} from '@ember/service';
import { get, set } from '@ember/object';

export default Service.extend({
  store: service(),
  list: null,
  dataFetched: false,

  init() {
    this._super(...arguments);
    get(this, 'store').findAll('country').then(
        response => this._setData(response)
      )
  },

  _setData(response) {
    set(this, 'list', response);
    set(this, 'dataFetched', true);
  }

});
