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
              r => console.log(r)

              // this.flashMessages.error(
              //   "There was an error while deleting the credit note."
              // )
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
    this.set("sort", sortParam);
  }

  //private
  successCallback() {
    this.send("refreshPage");
    this.flashMessages.success("Successfully deleted!");
  }
}
