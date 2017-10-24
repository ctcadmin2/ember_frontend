import Service, {inject as service} from '@ember/service';
import {get, set} from '@ember/object';

export default Service.extend({
  ajax: service(),

  init() {
    this.dataFetched = false;
    this.list = null;
    this.fetchData();
  },

  fetchData() {

    get(this, 'ajax').request(
      "https://restcountries.eu/rest/v2/regionalbloc/eu?fields=name;alpha2Code"
    ).then(response => {
      for (let i = 0; i < response.length; i++) {
        if (response[i].name === 'United Kingdom of Great Britain and Northern Ireland') {
          response[i].name = 'United Kingdom'
        } else if (response[i].name === 'Greece') {
          response[i].alpha2Code = 'EL'
        }
      }
      set(this, 'dataFetched', true);
      set(this, 'list', response);
    })
  }

});
