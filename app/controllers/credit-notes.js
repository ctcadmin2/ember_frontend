import Controller from "@ember/controller";
import { alias, empty } from "@ember/object/computed";
import { inject as service } from "@ember/service";
import { set, action } from "@ember/object";

export default class CreditNotesController extends Controller {
  @service flashMessages;

  queryParams = ["page", "size", "sort", "filter"];
  page = 1;
  size = 5;
  filter = "";
  sort = "number";

  @alias("model")
  creditNotes;
  @empty("filter")
  filterEmpty;

  @action
  clearFilter() {
    set(this, "filter", "");
  }
  @action
  setPage() {
    set(this, "page", 1);
  }
  @action
  destroyCreditNote() {
    //TODO add function
  }
  @action
  setSort(sortParam) {
    this.set("sort", sortParam);
  }
}
