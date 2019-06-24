import Route from "./protected";

export default class VehiclesRoute extends Route {
  queryParams = {
    page: {
      refreshModel: true
    },
    size: {
      refreshModel: true
    },
    sort: {
      refreshModel: true
    }
  };

  model(params) {
    return this.store.query("vehicle", {
      page: {
        number: params.page,
        size: params.size
      },
      sort: params.sort
    });
  }
}
