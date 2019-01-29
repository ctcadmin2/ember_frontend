import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('vehicle', params.vehicle_id);
  }
});
