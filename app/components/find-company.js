import {inject as service} from '@ember/service';
import Component from '@ember/component';
import { computed, get, set} from '@ember/object';
import { empty } from '@ember/object/computed';

export default Component.extend({
  ajax: service(),
  country: "RO",
  cif: '',
  messageClass: '',
  showSpinner: false,
  cifChanged: false,
  cifEmpty: empty('cif'),
  searchDisabled: computed('cifEmpty', 'cifChanged', function () {
   if(get(this, 'cifEmpty')) {
     return true;
   } else {
     if (get(this, 'cifChanged')) { //TODO simplify
       return false;
     } else {
       return true;
     }
   }
  }),
  actions: {
    cifChange() {
      set(this, 'cifChanged', true);
      set(this, 'messageClass', '');
      this._clearForm();
    },
    findCompany() {
      set(this, 'cifChanged', false);
      set(this, 'showSpinner', true);

      if (get(this, 'country') === 'RO') {
        this._openApi(get(this, 'cif'));
      } else {
        this._vies(get(this, 'country'), get(this, 'cif'));
      }
    }
  },

  //private
  _openApi(cif) {
    get(this, 'ajax').request(
      `https://api.openapi.ro/api/companies/${cif}`,
      {headers: {
        'x-api-key': 'bttJLEsEygo4tLwxsLEvsocK6XeeUkiLmHt1JpiTDg-Dzd3sTQ' //TODO remove key
      }}
    )
      .then(
        (result) => {this._apiSuccess(result, this._processOpenApiRequest.bind(this))},
        () => {this._apiError()}
      );
  },
  _vies(country, cif) {
    get(this, 'ajax').request(
      `https://www.isvat.eu/live/${country}/${cif}`
    )
      .then(
        (result) => this._apiSuccess(result, this._processViesRequest.bind(this)),
        () => this._apiError()
        )
  },
  _apiSuccess(result, callback) {
    set(this, 'showSpinner', false);
    set(this, 'messageClass', 'success');
    callback(result);
  },
  _apiError() {
    set(this, 'showSpinner', false);
    set(this, 'messageClass', 'error');
    set(this, 'data.name', '');
  },

  _processOpenApiRequest(result) {
    let company = get(this, 'data');
    set(company, 'name', get(result, 'denumire'));
    set(company, 'registration', get(result, 'numar_reg_com'));
    set(company, 'cif', get(result, 'cif'));
    set(company, 'address', `${get(result, 'adresa')}, ${get(result, 'cod_postal')}, ${get(result, 'judet')}`);
    set(company, 'phone', get(result, 'telefon'));
    set(company, 'country', get(this, 'country'));
    set(company, 'status', !get(result, 'radiata'));
  },
  _processViesRequest(result) {
    if (get(result, 'valid') === false) {
      this._apiError();
    } else {
      let company = get(this, 'data');
      set(company, 'name', get(result, 'name.0'));
      set(company, 'address', get(result, 'address.0'));
      set(company, 'vies', true);
      set(company, 'status', true);
    }
  },
  _clearForm() {
    let model = get(this, 'data');
    let keys = Object.keys(model.changedAttributes());
    let keysNr = keys.length;
    if (keysNr > 0) {
      for (let i = 0; i < keysNr; i++) {
        set(model, keys[i], undefined);
      }
    }
  },
  //TODO cleanup

});
