import Route from "./protected";
import { action } from "@ember/object";
import { next } from "@ember/runloop";
import $ from "jquery";

export default class CreditNotesRoute extends Route {
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
    return this.store.query("credit-note", {
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
