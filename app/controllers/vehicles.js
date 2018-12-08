import Controller from '@ember/controller';
import { alias, empty } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Controller.extend({
  flashMessages: service(),
  queryParams: ['page', 'size', 'sort', 'filter'],
  page: 1,
  size: 5,
  vehicles: alias('model'),
  filter: '',
  sort: 'name',
  filterEmpty: empty('filter'),
  actions: {
    destroyVehicle(id) {
      //TODO add function
    }
  }
});
