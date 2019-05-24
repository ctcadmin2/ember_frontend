import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import AdapterFetch from 'ember-fetch/mixins/adapter-fetch';
import { computed } from '@ember/object';

export default DS.JSONAPIAdapter.extend(AdapterFetch, DataAdapterMixin, {
  headers: computed('session.data.authenticated.jwt', function() {
    const headers = {};
    headers['Content-Type'] = 'application/vnd.api+json';
    if (this.session.isAuthenticated) {
      headers['Authorization'] = `Bearer ${
        this.session.data.authenticated.jwt
      }`;
    }
    return headers;
  })
});
