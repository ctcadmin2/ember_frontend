import Route from "./protected";

export default class CreditInvoicesRoute extends Route {
  queryParams = {
    page: {
      refreshModel: true
    },
    size: {
      refreshModel: true
    },
    filter: {
      refreshModel: true
    },
    sort: {
      refreshModel: true
    }
  };

  model(params) {
    return this.store.query("credit-invoice", {
      page: {
        number: params.page,
        size: params.size
      },
      sort: params.sort,
      filter: {
        q: params.filter
      }
    });
  }
}
