import Controller from "@ember/controller";
import { alias, empty } from "@ember/object/computed";

export default Controller.extend({
  queryParams: ["page", "size", "sort", "filter"],
  page: 1,
  size: 5,
  filter: "",
  sort: "number",
  filterEmpty: empty("filter"),
  creditInvoices: alias("model"),

  actions: {
    clearFilter() {
      this.set("filter", "");
    },
    setPage() {
      this.set("page", 1);
    },
    // TODO refactor
    sort(prop) {
      let sortParam = this.sort;
      if (sortParam.includes(prop)) {
        let index = sortParam.indexOf(prop);
        if (sortParam[index - 1] === "-") {
          sortParam = sortParam.substr(0, index - 1) + sortParam.substr(index);
        } else {
          sortParam =
            sortParam.substr(0, index) + "-" + sortParam.substr(index);
        }
      } else {
        sortParam = sortParam + "," + prop;
      }
      this.set("sort", sortParam);
    }
  }
});
