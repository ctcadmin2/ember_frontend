import Controller from "@ember/controller";
import { alias, empty } from "@ember/object/computed";
import { action } from "@ember/object";

export default class CreditInvoicesController extends Controller {
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
