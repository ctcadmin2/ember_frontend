import { inject as service } from "@ember/service";
import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { set, action } from "@ember/object";
import { task } from "ember-concurrency";
import { isEmpty } from "@ember/utils";

export default class FindCompany extends Component {
  @service countries;
  @service companyInfo;

  country = "RO";

  @tracked cifChanged = false;
  @tracked cif;
  @tracked responseType = "";
  @tracked taskRunning = this.findTask.isRunning;

  get cifEmpty() {
    return isEmpty(this.cif);
  }

  get searchDisabled() {
    return this.cifEmpty || this.cifChanged;
  }

  get formClass() {
    if (this.isRunning) {
      return "loading";
    } else {
      return this.responseType;
    }
  }

  @(task(function*() {
    set(this, "cifChanged", true);
    let result;
    try {
      if (this.country === "RO") {
        result = yield this.companyInfo.checkOpenApi(this.cif);
      } else {
        result = yield this.companyInfo.checkVies(this.country, this.cif);
      }
    } catch (error) {
      set(this, "responseType", "error");
      result = { error: "error" };
    }
    this._processResponse(result);
  }).drop())
  findTask;

  @action
  changeCif() {
    set(this, "cifChanged", false);
    set(this, "responseType", "");
  }

  //private
  _processResponse(data) {
    if (data.data) {
      set(this, "responseType", "success");
    } else {
      set(this, "responseType", "error");
    }

    this.args.returnData(data);
  }
}
