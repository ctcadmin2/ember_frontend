import { equal, lte, gte, alias } from "@ember/object/computed";
import Component from "@ember/component";
import { get, computed } from "@ember/object";
import { pluralize } from "ember-inflector";

export default class PaginationList extends Component {
  @alias("model.meta")
  meta;
  @alias("model.query")
  query;
  @computed("model")
  get route() {
    let route = pluralize(this.model.modelName);
    return `${route}.index`;
  }
  @gte("meta.page-count", 2)
  showPagination;
  @equal("query.page.number", 1)
  prevButton;
  @lte("query.page.number", 2)
  firstButton;
  @computed("meta.page-count")
  get nextButton() {
    return get(this, "meta.page-count") === get(this, "query.page.number");
  }
  @computed("query.page.number", "meta.page-count")
  get lastButton() {
    let pageCount = get(this, "meta.page-count");
    let currentPage = get(this, "query.page.number");
    let showButton = pageCount - 1;
    return currentPage >= showButton;
  }
  @computed("query")
  get currentPage() {
    return get(this, "query.page.number");
  }
  @computed("meta.page-count")
  get pageList() {
    let list = [];
    for (let i = 1; i <= get(this, "meta.page-count"); i++) {
      list.push(i);
    }
    return list;
  }
  @computed("currentPage")
  get incrementPage() {
    //TODO merge this 2 functions
    let currentPage = this.currentPage;
    return currentPage + 1;
  }
  @computed("currentPage")
  get decrementPage() {
    let currentPage = this.currentPage;
    return currentPage - 1;
  }
}
