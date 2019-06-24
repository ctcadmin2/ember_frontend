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
  // @action
  // // TODO refactor
  // sort(prop) {
  //   let sortParam = this.sort;
  //   if (sortParam.includes(prop)) {
  //     let index = sortParam.indexOf(prop);
  //     if (sortParam[index - 1] === "-") {
  //       sortParam = sortParam.substr(0, index - 1) + sortParam.substr(index);
  //     } else {
  //       sortParam = sortParam.substr(0, index) + "-" + sortParam.substr(index);
  //     }
  //   } else {
  //     sortParam = sortParam + "," + prop;
  //   }
  //   this.set("sort", sortParam);
  // }
}
