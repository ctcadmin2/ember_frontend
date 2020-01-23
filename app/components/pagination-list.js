import Component from "@glimmer/component";

export default class PaginationList extends Component {
  get currentPage() {
    return this.args.data.query.page.number;
  }
  get pageCount() {
    return this.args.data.meta.pageCount || false;
  }

  get showPagination() {
    return this.pageCount >= 2;
  }
  get prevButton() {
    return this.currentPage == 1;
  }
  get firstButton() {
    return this.currentPage <= 2;
  }
  get nextButton() {
    return this.pageCount === this.currentPage;
  }
  get lastButton() {
    let showButton = this.pageCount - 1;
    return this.currentPage >= showButton;
  }
  get pageList() {
    return Array.from({ length: this.pageCount }, (x, i) => i + 1);
  }
}
