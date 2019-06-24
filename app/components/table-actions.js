import Component from "@ember/component";
import Swal from "sweetalert2";
import { computed, action } from "@ember/object";
import { pluralize } from "ember-inflector";

export default class TableActions extends Component {
  tagName = "";

  @computed("model")
  get route() {
    let route = this.model.constructor.modelName;
    return pluralize(route);
  }

  @action
  deleteButton(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      allowEscapeKey: false,
      allowOutsideClick: false,
      focusCancel: true,
      confirmButtonClass: "ui green large button",
      cancelButtonClass: "ui red large button",
      confirmButtonText: "Yes, delete it!",
      buttonsStyling: false
    }).then(resp => this._deleteModel(resp, id));
  }

  //private
  _deleteModel(resp, id) {
    if (resp["value"]) {
      this.deleteModel(id);
    }
  }
}
