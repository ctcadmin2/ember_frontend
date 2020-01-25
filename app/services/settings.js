/* eslint-disable ember/named-functions-in-promises */
import Service from "@ember/service";
import { inject as service } from "@ember/service";
import { fetch } from "fetch";
import { task } from "ember-concurrency";

export default class SettingsService extends Service {
  @service flashMessages;
  @service session;

  main = null;
  company = null;

  // TODO check possible removal
  getData(obj) {
    if (this[obj]) {
      return this[obj];
    } else {
      this.loadData.perform(obj);

      return this[obj];
    }
  }

  /**
   * Task to update the settings on the server
   * @method updateData
   * @param {String} type The type of settings to update
   * @param {Object} data The payload data
   */
  @task(function*(type, data) {
    let payload = {};
    payload[type] = data;

    let response = yield fetch(`/prefs/${type}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.session.data.authenticated.jwt}`,
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prefs: payload })
    });

    if (response.status >= 200 && response.status < 300) {
      this.flashMessages.success("Settings updated successfully.");
    } else {
      this.flashMessages.error("Settings could not be saved.");
    }
  })
  updateData;

  /**
   * Task to get the settings from the server
   * @method loadData
   * @param {String} type The type of settings to retrieve
   */
  @task(function*(type) {
    let response = yield fetch(`/prefs/${type}`, {
      headers: {
        Authorization: `Bearer ${this.session.data.authenticated.jwt}`
      }
    });

    if (response.status >= 200 && response.status < 300) {
      let json = yield response.json();
      this[type] = json;
    } else {
      this.flashMessages.error("Settings could not be loaded.");
    }
  })
  loadData;
}
