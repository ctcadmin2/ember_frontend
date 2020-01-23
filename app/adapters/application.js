import JSONAPIAdapter from "@ember-data/adapter/json-api";
import { inject as service } from "@ember/service";

export default class ApplicationAdapter extends JSONAPIAdapter {
  @service session;

  get headers() {
    const headers = {};
    headers["Content-Type"] = "application/vnd.api+json";
    if (this.session.isAuthenticated) {
      headers[
        "Authorization"
      ] = `Bearer ${this.session.data.authenticated.jwt}`;
    }
    return headers;
  }
}
