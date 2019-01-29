import Service, { inject as service } from '@ember/service';
import fetchData from 'frontend/utils/fetch-data';
import { get } from '@ember/object';

export default Service.extend({
  session: service(),

  checkOpenApi(cif) {
    let url = `/api_helpers/openapi.json?cif=${cif}`;
    let fetch = fetchData(url, this.session.data.authenticated.token);
    return fetch;
  },
  checkVies(country, cif) {
    let url = `/api_helpers/vies.json?country=${country}&cif=${cif}`;
    let fetch = fetchData(url, this.session.data.authenticated.token);
    return fetch;
  }
});
