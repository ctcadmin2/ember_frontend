import Route from './protected';

export default Route.extend({
  model() {
    return this.store.findAll('user');
  }
})
