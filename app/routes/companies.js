import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  model(params) {
    return Ember.RSVP.hash({
      companies: this.store.query('company', {
        page: {
          number: params.page,
          size: params.size
        },
        filter: params.filter
      }),
      countries: this.get('ajax').request(
          "https://restcountries.eu/rest/v2/regionalbloc/eu?fields=name;alpha2Code"
      ).then(response => {
        for(let i = 0; i < response.length; i++) {
          if (response[i].name === 'United Kingdom of Great Britain and Northern Ireland') {
            response[i].name = 'United Kingdom'
          } else if (response[i].name === 'Greece') {
            response[i].alpha2Code = 'EL'
          }
        }
        return JSON.parse(JSON.stringify(response));
      })
    })
  },

  queryParams: {
    page: {
      refreshModel: true
    },
    size: {
      refreshModel: true
    },
    filter: {
      refreshModel: true
    }
  }
});
