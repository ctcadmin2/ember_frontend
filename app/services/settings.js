/* eslint-disable ember/named-functions-in-promises */
import Service from "@ember/service";
import fetch from "fetch";
import { inject as service } from "@ember/service";
import { resolve, reject } from "rsvp";

export default Service.extend({
  session: service(),
  flashMessages: service(),
  main: "",
  company: "",

  init() {
    this._super(...arguments);
    this.load("main");
    this.load("company");
  },

  load(obj) {
    return fetch(`/prefs/${obj}`, {
      headers: {
        Authorization: `Bearer ${this.session.data.authenticated.jwt}`
      }
    })
      .then(response => this._handleResponse(response))
      .then(json => this._handleJson(json))
      .then(data => this.set(obj, data));
  },

  /**
   * Updates the settings on the server
   * @method update
   * @param {String} type The type of settings to update
   * @param {Object} data The payload data
   */
  update(type, data) {
    let payload = {};
    payload[type] = data;
    return fetch(`/prefs/${type}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.session.data.authenticated.jwt}`,
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prefs: payload })
    }).then(() => this.flashMessages.success("Settings updated successfully."));
  },

  //private
  _handleResponse(response) {
    if (response.status >= 200 && response.status < 300) {
      return resolve(response);
    } else {
      return reject(response.status);
    }
  },
  _handleJson(response) {
    return response.json();
  }
});
