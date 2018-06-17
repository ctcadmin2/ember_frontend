import Service from '@ember/service';
import fetchData from 'frontend/utils/fetch-data';

export default Service.extend({
  checkOpenApi(cif) {
    let url = `/api_helpers/openapi.json?cif=${cif}`;
    let fetch = fetchData(url);
    return fetch;
  },
  checkVies(country, cif) {
    let url = `/api_helpers/vies.json?country=${country}&cif=${cif}`;
    let fetch = fetchData(url);
    return fetch;
  }
});
