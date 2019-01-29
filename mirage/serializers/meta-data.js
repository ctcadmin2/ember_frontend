import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
  serialize(object, request) {
    // This is how to call super, as Mirage borrows [Backbone's implementation of extend](http://backbonejs.org/#Model-extend)
    let json = JSONAPISerializer.prototype.serialize.apply(this, arguments);
    // Add metadata, sort parts of the response, etc.
    return this._makeMeta(json, request);
  },

  // private
  _makeMeta(data, request) {
    const size = parseInt(request.queryParams['page[size]']);
    const page = parseInt(request.queryParams['page[number]']);
    const start = page * size - size;
    const end = start + size;
    let list = data.data.slice(start, end);
    let model = {
      data: list,
      meta: {
        'item-count': data.data.length,
        'page-count': Math.floor(data.data.length / size)
      }
    };
    return model;
  }
});
