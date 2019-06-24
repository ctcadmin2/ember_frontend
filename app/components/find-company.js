import { inject as service } from "@ember/service";
import Component from "@ember/component";
import { computed, set, action } from "@ember/object";
import { empty, alias, or } from "@ember/object/computed";
import { task } from "ember-concurrency";

export default class FindCompany extends Component {
  @service countries;
  @service companyInfo;

  country = "RO";
  responseType = "";
  cifChanged = false;

  @alias("findTask.isRunning")
  taskRunning;
  @alias("findTask.last.hasStarted")
  hasStarted;
  @empty("cif")
  cifEmpty;
  @or("cifEmpty", "cifChanged")
  searchDisabled;
  @computed("taskRunning", "responseType")
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
      if (this.country == "RO") {
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

  executeTheTask() {
    this.findTask.perform();
  }

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

    this.returnData(data);
  }
}
