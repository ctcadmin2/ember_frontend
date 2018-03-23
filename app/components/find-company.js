import { inject as service } from "@ember/service";
import Component from "@ember/component";
import { computed, get, set } from "@ember/object";
import { empty } from "@ember/object/computed";

export default Component.extend({
  store: service(),
  country: "RO",
  cif: "",
  messageClass: "",
  showSpinner: false,
  cifChanged: false,
  cifEmpty: empty("cif"),
  searchDisabled: computed("cifEmpty", "cifChanged", function() {
    if (get(this, "cifEmpty")) {
      return true;
    } else {
      if (get(this, "cifChanged")) {
        //TODO simplify
        return false;
      } else {
        return true;
      }
    }
  }),
  actions: {
    cifChange() {
      set(this, "cifChanged", true);
      set(this, "messageClass", "");
      this._clearForm();
    },
    findCompany() {
      set(this, "cifChanged", false);
      set(this, "showSpinner", true);

      if (get(this, "country") === "RO") {
        this._openApi(get(this, "cif"));
      } else {
        this._vies(get(this, "country"), get(this, "cif"));
      }
    }
  },

  //private
  _openApi(cif) {
    get(this, "store")
      .queryRecord("openapi", { cif: cif })
      .then(result => this._apiSuccess(result), () => this._apiError());
  },
  _vies(country, cif) {
    get(this, "store")
      .queryRecord("vies", { cif: cif, country: country })
      .then(result => this._apiSuccess(result), () => this._apiError());
  },
  _apiSuccess(result) {
    set(this, "showSpinner", false);
    set(this, "messageClass", "success");
    this._processResponse(result);
  },
  _apiError() {
    set(this, "showSpinner", false);
    set(this, "messageClass", "error");
    set(this, "data.name", "");
  },
  _processResponse(response) {
    let keys = Object.keys(response.data);
    let model = get(this, "data");
    keys.forEach(key => {
      if (get(response, key) !== null) {
        set(model, key, get(response, key));
      }
    });
  },
  _clearForm() {
    let model = get(this, "data");
    let keys = Object.keys(model.changedAttributes());
    let keysNr = keys.length;
    if (keysNr > 0) {
      for (let i = 0; i < keysNr; i++) {
        set(model, keys[i], undefined);
      }
    }
  }
});
