import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  creditNotes: hasMany('credit-note'),

  afterCreate(vehicle, server) {
    server.createList('credit-note', 10, { vehicle });
  }
});
