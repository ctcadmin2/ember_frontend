import Base from 'ember-simple-auth/authenticators/base';
import { run } from "@ember/runloop";
import $ from "jquery";
import RSVP from "rsvp";
import { isEmpty } from "@ember/utils";

// Eslint rules
/* eslint ember/named-functions-in-promises: "off"*/

export default Base.extend({
  restore(data) {
    return new RSVP.Promise((resolve, reject) => {
      if (!isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },

  authenticate(creds) {
    const { email, password } = creds;

    const data = JSON.stringify({
      auth: {
        email,
        password
      }
    });

    const requestOptions = {
      url: '/user_token',
      type: 'POST',
      data,
      contentType: 'application/json',
      dataType: 'json'
    };

    return new RSVP.Promise((resolve, reject) => {
      $.ajax(requestOptions).then((response) => {
        const { jwt } = response;
        // Wrapping aync operation in Ember.run
        run(() => {
          resolve({
            token: jwt
          });
        });
      }, (error) => {
        // Wrapping aync operation in Ember.run
        run(() => {
          reject(error);
        });
      });
    });
  },

  invalidate(data) {
    return RSVP.Promise.resolve(data);
  }
});
