import Service, { inject as service } from "@ember/service";
import fetchData from "../utils/fetch-data";

export default class CountriesService extends Service {
  @service session;

  list = null;
  dataFetched = false;
  url = "/api_helpers/countries.json";

  init() {
    this._super(...arguments);
    this.set("fetch", fetchData(this.url, this.session.data.authenticated.jwt));
    this._setlist();
  }

  //private
  _setlist() {
    let f = this.fetch;
    f.then(list => this._successCallback(list)).catch(() =>
      this.set("list", { error: "error" })
    );
  }
  _successCallback(list) {
    this.set("list", list);
    this.set("dataFetched", true);
  }
}
