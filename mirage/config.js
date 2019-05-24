import { get } from '@ember/object';
import Response from 'ember-cli-mirage/response';

export default function() {
  // It's important that the passthrough for coverage is before the namespace, otherwise it will be prefixed.
  this.passthrough('/write-coverage');

  // console logging
  // this.logging = false;

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = 'api_v1';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400; // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
  //authentication
  this.post('/user_token/', (schema, request) => {
    const req = JSON.parse(request.requestBody);
    const pw = get(req, 'auth.password');
    if (pw === 'test1234') {
      return new Response(
        201,
        {},
        {
          jwt:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImFkbWluIjp0cnVlfQ.hgNSDI7STvbPMw4dJky55hUpUy5jriNIrLwp5dW3awg'
        }
      );
    } else if (pw === 'notActive') {
      return new Response(403, {}, {});
    } else {
      return new Response(404, {}, {});
    }
  });
  this.get('/companies', (schema, request) => {
    const token = get(request, 'requestHeaders.authorization');
    if (
      token ===
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImFkbWluIjp0cnVlfQ.hgNSDI7STvbPMw4dJky55hUpUy5jriNIrLwp5dW3awg'
    ) {
      return schema.companies.all();
    } else {
      return new Response(401, {}, {});
    }
  });
  this.get('/users', (schema, request) => {
    const token = get(request, 'requestHeaders.authorization');
    if (
      token ===
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImFkbWluIjp0cnVlfQ.hgNSDI7STvbPMw4dJky55hUpUy5jriNIrLwp5dW3awg'
    ) {
      return schema.users.all();
    } else {
      return new Response(401, {}, {});
    }
  });

  this.get('/users/:id', (schema, request) => {
    const id = request.params.id;
    const token = get(request, 'requestHeaders.authorization');
    if (
      token ===
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImFkbWluIjp0cnVlfQ.hgNSDI7STvbPMw4dJky55hUpUy5jriNIrLwp5dW3awg'
    ) {
      return schema.users.find(id);
    } else {
      return new Response(401, {}, {});
    }
  });

  this.del('/users/:id');
  this.patch('/users/:id', (schema, request) => {
    const token = get(request, 'requestHeaders.authorization');

    if (
      token ===
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImFkbWluIjp0cnVlfQ.hgNSDI7STvbPMw4dJky55hUpUy5jriNIrLwp5dW3awg'
    ) {
      return new Response(204, {}, {});
    } else {
      return new Response(401, {}, {});
    }
  });

  this.get('/api_helpers/countries.json', () => {
    return [{ name: 'Romania', value: 'RO' }, { name: 'Denmark', value: 'DK' }];
  });

  this.get('/api_helpers/openapi.json', (schema, request) => {
    let data = {
      data: {
        name: 'openapi S.R.L.',
        registration: 'J00/0000/0000',
        cif: '0123456789',
        address: 'on the moon',
        country: 'RO',
        phone: '555-12345',
        status: true
      }
    };
    let error = { error: 'not found' };

    if (request.queryParams.cif == 1) {
      return data;
    } else if (request.queryParams.cif == 2) {
      return error;
    } else {
      return new Response(404, {}, {});
    }
  });

  this.get('/api_helpers/vies.json', (schema, request) => {
    let data = {
      data: {
        name: 'vies A/S',
        cif: '123456789',
        country: 'DK',
        address: 'somewhere on the sun',
        vies: true,
        status: true
      }
    };
    let error = { error: 'not found' };

    if (request.queryParams.cif == 1) {
      return data;
    } else if (request.queryParams.cif == 2) {
      return error;
    } else {
      return new Response(404, {}, {});
    }
  });

  //vehicles
  this.get('/vehicles', (schema, request) => {
    const token = get(request, 'requestHeaders.authorization');
    if (
      token ===
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImFkbWluIjp0cnVlfQ.hgNSDI7STvbPMw4dJky55hUpUy5jriNIrLwp5dW3awg'
    ) {
      return schema.vehicles.all();
    } else {
      return new Response(401, {}, {});
    }
  });

  //credit notes
  this.get('/credit-notes', (schema, request) => {
    const token = get(request, 'requestHeaders.authorization');
    if (
      token ===
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImFkbWluIjp0cnVlfQ.hgNSDI7STvbPMw4dJky55hUpUy5jriNIrLwp5dW3awg'
    ) {
      return schema.creditNotes.all();
    } else {
      return new Response(401, {}, {});
    }
  });
}
