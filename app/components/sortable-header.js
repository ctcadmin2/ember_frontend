import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class SortableHeaderComponent extends Component {
  tName = this.args.prop.split("_")[0];
  @action
  sortTable(prop) {
    let sortParam = this.args.sort;
    if (sortParam === prop) {
      sortParam = `-${prop}`;
    } else {
      sortParam = prop;
    }
    this.args.setSort(sortParam);
  }
}
