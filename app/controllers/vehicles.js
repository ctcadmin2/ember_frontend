import Controller from '@ember/controller';
import { alias, empty } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Controller.extend({
  flashMessages: service(),
  queryParams: ['page', 'size', 'sort'],
  page: 1,
  size: 5,
  vehicles: alias('model'),
  sort: 'registration',
  filterEmpty: empty('filter'),
  actions: {
    destroyVehicle() {
      //TODO add function
    }
  }
});
