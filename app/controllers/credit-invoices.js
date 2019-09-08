import Controller from "@ember/controller";
import { alias, empty } from "@ember/object/computed";
import { action, computed } from "@ember/object";
import { inject as service } from "@ember/service";

export default class CreditInvoicesController extends Controller {
  @service currentUser;

  @computed
  get locale() {
    let user = this.currentUser.user;
    return user.lang.split("-")[0];
  }

  queryParams = ["page", "size", "sort", "filter"];
  page = 1;
  size = 5;
  filter = "";
  sort = "number";

  @empty("filter")
  filterEmpty;
  @alias("model")
  creditInvoices;

  @action
  clearFilter() {
    this.set("filter", "");
  }
  @action
  setPage() {
    this.set("page", 1);
  }
  @action
  setSort(sortParam) {
    this.set("sort", sortParam);
  }
}
