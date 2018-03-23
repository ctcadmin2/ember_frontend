export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  server.createList('company', 50);
  server.create('user', {id: 1, admin: true, active: true, firstName: 'ssss'})
  server.createList('user', 5);
}
