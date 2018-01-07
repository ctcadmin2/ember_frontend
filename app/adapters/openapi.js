import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api_helpers',
  pathForType(modelName) {
    return modelName;
  }
});
