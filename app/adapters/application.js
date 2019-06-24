import DS from "ember-data";
import DataAdapterMixin from "ember-simple-auth/mixins/data-adapter-mixin";
import AdapterFetch from "ember-fetch/mixins/adapter-fetch";
import { computed } from "@ember/object";

export default class ApplicationAdapter extends DS.JSONAPIAdapter.extend(
  AdapterFetch,
  DataAdapterMixin
) {
  @computed("session.data.authenticated.jwt")
  get headers() {
    const headers = {};
    headers["Content-Type"] = "application/vnd.api+json";
    if (this.session.isAuthenticated) {
      headers["Authorization"] = `Bearer ${
        this.session.data.authenticated.jwt
      }`;
    }
    return headers;
  }
}
