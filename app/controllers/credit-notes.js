import Controller from "@ember/controller";
import { isEmpty } from "@ember/utils";
import { inject as service } from "@ember/service";
import { set, action } from "@ember/object";

export default class CreditNotesController extends Controller {
  @service flashMessages;

  queryParams = ["page", "size", "sort", "filter"];
  page = 1;
  size = 5;
  filter = "";
  sort = "number";

  get creditNotes() {
    return this.model;
  }

  get filterEmpty() {
    return isEmpty(this.filter);
  }

  @action
  clearFilter() {
    set(this, "filter", "");
  }
  @action
  setPage() {
    set(this, "page", 1);
  }
  @action
  destroyCreditNote(id) {
    this.store
      .findRecord("credit-note", id, { backgroundReload: false })

      .then(
        cn =>
          cn
            .destroyRecord()
            .then(
              () => this.successCallback(),
              () =>
                this.flashMessages.error("Credit note could not be deleted!")
            )
            .catch(
              this.flashMessages.error(
                "There was an error while deleting the credit note."
              )
            ),
        () => this.flashMessages.error("Company could not be found!")
      )
      .catch(() =>
        this.flashMessages.error(
          "There was an error while looking for the credit note."
        )
      );
  }

  @action
  setSort(sortParam) {
    this.sort = sortParam;
  }

  @action
  pageChange(page) {
    this.transitionToRoute({ queryParams: { page: page } });
  }

  //private
  successCallback() {
    this.send("refreshPage");
    this.flashMessages.success("Successfully deleted!");
  }
}
