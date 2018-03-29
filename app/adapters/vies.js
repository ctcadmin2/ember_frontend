import DS from './application';

export default DS.extend({
  namespace: 'api_helpers',
  pathForType(modelName) {
    return modelName;
  }
});
