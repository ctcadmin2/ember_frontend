import Route from '@ember/routing/route';
import { next } from '@ember/runloop';
import $ from 'jquery';

export default Route.extend({
  model(params) {
    return this.store.findRecord('vehicle', params.vehicle_id);
  },

  actions: {
    didTransition() {
      next(function() {
        $('.vehicleModal').modal('toggle');
      });
    }
  }
});
