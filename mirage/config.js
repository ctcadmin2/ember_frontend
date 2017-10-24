export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = 'api_v1';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

  //countries mock
  this.get('https://restcountries.eu/rest/**', () => {
    return JSON.parse('[{"name":"Denmark", "alpha2Code":"DK"},{"name":"Romania","alpha2Code":"RO"}]')
  });
  //openapi success
  this.get('https://api.openapi.ro/api/companies/1', () => {
    return JSON.parse('{"cif": "13548146","numar_reg_com": "J32/503/2000","radiata": false,"denumire": "S.C. CUBUS ARTS S.R.L","adresa": "B-dul Mihai Viteazu, 7, Sibiu","stare": "INREGISTRAT din data 23 Noiembrie 2000","cod_postal": "550350","judet": "Sibiu","telefon": "0269232192"}');
  });
  //openapi error
  this.get('https://api.openapi.ro/api/companies/2', () => {
    return JSON.parse('{"error": {"Attributes": {"title": "missing_required_header","status": 400,"description": "Required header {header_name} is missing","code": 40001}}}');
  }, 404);
  //vies success
  this.get('https://www.isvat.eu/live/DK/1', () => {
    return JSON.parse('{"valid":true,"cache":{"0":"live"},"name":{"0":"NTG NORDIC A\\/S"},"address":{"0":"Truckvej 5 4600 Koge"},"rate_limit":1000,"rate_info":"Max. 1.000 request per month"}');
  });
  //vies error
  this.get('https://www.isvat.eu/live/DK/2', () => {
    return JSON.parse('{"valid":false}');
  });
  //vies 404 error
  this.get('https://www.isvat.eu/live/DK/3', {message: '404 ERROR'}, 404);
}
