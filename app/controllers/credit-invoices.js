import Controller from "@ember/controller";
import { isEmpty } from "@ember/utils";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class CreditInvoicesController extends Controller {
  @service currentUser;

  get locale() {
    let user = this.currentUser.user;
    return user.lang.split("-")[0];
  }

  queryParams = ["page", "size", "sort", "filter"];
  page = 1;
  size = 5;
  filter = "";
  sort = "number";

  get creditInvoices() {
    return this.model;
  }
  get filterEmpty() {
    return isEmpty(this.filter);
  }

  @action
  clearFilter() {
    this.filter = "";
  }
  @action
  setPage() {
    this.page = 1;
  }
  @action
  setSort(sortParam) {
    this.sort = sortParam;
  }
  @action
  pageChange(page) {
    this.transitionToRoute({ queryParams: { page: page } });
  }
  @action
  destroyCreditInvoice() {
    alert("TODO");
  }
}
