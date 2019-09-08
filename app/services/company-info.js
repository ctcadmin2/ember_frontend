import Service, { inject as service } from "@ember/service";
import fetchData from "frontend/utils/fetch-data";

export default class CompanyInfoService extends Service {
  @service session;

  checkOpenApi(cif) {
    let url = `/api_helpers/openapi.json?cif=${cif}`;
    return fetchData(url, this.session.data.authenticated.jwt);
  }
  checkVies(country, cif) {
    let url = `/api_helpers/vies.json?country=${country}&cif=${cif}`;
    return fetchData(url, this.session.data.authenticated.jwt);
  }
}
