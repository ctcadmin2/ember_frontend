import BaseAuthenticator from "ember-simple-auth/authenticators/base";
import jwtDecode from "ember-cli-jwt-decode";
import { Promise, resolve, reject } from "rsvp";
import { isEmpty } from "@ember/utils";

/**
 * JWT (JSON Web Token) Authenticator that supports automatic token refresh.
 * Inspired(copied) by [ember-simple-auth-token](https://github.com/jpadilla/ember-simple-auth-token)
 */

export default BaseAuthenticator.extend({
  /**
   * Restores the session from a set of session properties.
   * It will return a resolving promise if `data.token` is non-empty and `expiresAt` is greater than the calculated `now`.
   * @method restore
   * @param {Object} data The data to restore the session from
   * @return {Promise} A promise that when it resolves results in the session being authenticated
   * @public
   * FIX: if 2 tabs opened it gets unauth
   * FIX: loses auth on page refresh
   */
  restore(data) {
    return new Promise((resolve, reject) => {
      // there is no token available
      if (isEmpty(data.token)) {
        return reject(new Error("no token"));
      }

      /**
       *  check if token exists in Storage
       *  if exists check if not expired
       *  if expired clear token
       *  else restore
       */
      let decoded_token = jwtDecode(data.token);
      let now = this._getCurrentTime();
      let expiresAt = decoded_token.exp;

      // if token is expired invalidate session
      if (expiresAt < now) {
        return this.invalidate().then(() =>
          reject(new Error("token is expired"))
        );
      }

      // return data
      return resolve(data);
    });
  },

  /**
   * Authenticates the session with the specified `creds`.
   * It will return a resolving promise if it successfully posts a request to the server with the valid credentials.
   * @method authenticate
   * @param {Object} creds The credentials to authenticate the session with
   * @return {Promise} A promise that resolves when an auth token is successfully acquired from the server and rejects otherwise
   * @public
   */
  authenticate(credentials) {
    const { email, password } = credentials;
    const data = JSON.stringify({
      auth: {
        email,
        password
      }
    });

    return fetch("/user_token", {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: data
    })
      .then(response => this._handleResponse(response))
      .then(response => this._handleJson(response));
  },
  /**
   * Invalidates the session.
   * @method invalidate
   * @param {Object} data The data of the session to be invalidated
   * @return {Promise} A resolving promise
   * @public
   */
  invalidate() {
    return resolve();
  },

  /**
   * Returns the current time as a timestamp in seconds
   * @method _getCurrentTime
   * @return {Integer} timestamp
   * @private
   */
  _getCurrentTime() {
    return Math.floor(new Date().getTime() / 1000);
  },
  /**
   * Handle the response from server.
   * Returns a Promise
   * @method _handleResponse
   * @param {Stream} response The fetch response from server
   * @return {Promise} A resolving promise
   * @private
   */
  _handleResponse(response) {
    if (response.status >= 200 && response.status < 300) {
      return resolve(response);
    } else {
      return reject(response.status);
    }
  },
  /**
   * Returns the json if the response from server resolves
   * @method _handleJson
   * @param {Promise} response
   * @returns {Object} A json object
   * @private
   */
  _handleJson(response) {
    return response.json();
  }
});
