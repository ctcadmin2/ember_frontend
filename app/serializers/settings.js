import DS from 'ember-data';
import { set } from '@ember/object';

export default DS.JSONAPISerializer.extend({
  normalize(typeClass, hash) {
    let unordered = hash.attributes.main;
    let ordered = {};
    Object.keys(unordered)
      .sort()
      .forEach(key => {
        ordered[key] = unordered[key];
      });

    set(hash.attributes, 'main', ordered);

    return this._super.apply(this, arguments);
  },
  modelNameFromPayloadKey() {
    return 'settings';
  },
  payloadKeyFromModelName() {
    return 'prefs';
  }
});
