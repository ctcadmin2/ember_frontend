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
  // @action
  // // TODO refactor
  // sort(prop) {
  //   let sortParam = this.sort;
  //   if (sortParam.includes(prop)) {
  //     let index = sortParam.indexOf(prop);
  //     if (sortParam[index - 1] === '-') {
  //       sortParam = sortParam.substr(0, index - 1) + sortParam.substr(index);
  //     } else {
  //       sortParam =
  //         sortParam.substr(0, index) + '-' + sortParam.substr(index);
  //     }
  //   } else {
  //     sortParam = sortParam + ',' + prop;
  //     if (sortParam[0] === ',') {
  //       sortParam = sortParam.substring(1);
  //     }
  //   }
  //   set(this, 'sort', sortParam);
  // }
}
