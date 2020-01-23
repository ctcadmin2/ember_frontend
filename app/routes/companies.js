import Route from "./protected";
import { next } from "@ember/runloop";
import $ from "jquery";
import { action } from "@ember/object";

export default class CompaniesRoute extends Route {
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
    return this.store.query("company", {
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

  @action
  didTransition() {
    next(function() {
      // eslint-disable-next-line ember/no-jquery
      $("body .modals").dimmer("hide"); //dimmer doesn't close on back button TODO find nicer fix
    });
  }
  @action
  refreshPage() {
    this.refresh();
  }
}
