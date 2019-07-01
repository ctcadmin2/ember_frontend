import Controller from "@ember/controller";
import { alias, empty } from "@ember/object/computed";
import { set, action } from "@ember/object";
import { inject as service } from "@ember/service";
//TODO check all promises paths

export default class CompaniesController extends Controller {
  @service flashMessages;
  @service companyInfo;

  queryParams = ["page", "size", "sort", "filter"];
  page = 1;
  size = 5;
  filter = "";
  sort = "name";

  @empty("filter")
  filterEmpty;
  @alias("model")
  companies;

  @action
  clearFilter() {
    set(this, "filter", "");
  }
  @action
  setPage() {
    set(this, "page", 1);
  }
  @action
  destroyCompany(id) {
    this.store
      .findRecord("company", id, { backgroundReload: false })
      .then(
        record =>
          record
            .destroyRecord()
            .then(
              () => this.successCallback(),
              () => this.flashMessages.error("Company could not be deleted!")
            )
            .catch(() =>
              this.flashMessages.error(
                "There was an error while deleting the company."
              )
            ),
        () => this.flashMessages.error("Company could not be found!")
      )
      .catch(() =>
        this.flashMessages.error(
          "There was an error while looking for the company."
        )
      );
  }
  @action
  setSort(sortParam) {
    this.set("sort", sortParam);
  }

  successCallback() {
    this.send("refreshPage");
    this.flashMessages.success("Successfully deleted!");
  }
}

//TODO write tests
//TODO translate
