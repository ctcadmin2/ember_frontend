import { computed } from '@ember/object';
import { equal, lte } from '@ember/object/computed';
import Component from '@ember/component';
import { get } from "@ember/object";

export default Component.extend({
  prevButton: equal('query.page.number', 1),
  firstButton: lte('query.page.number', 2),

  nextButton: computed('meta.page-count', 'query.page.number', function () {
    return get(this, 'meta.page-count') === get(this, 'query.page.number');
  }),
  lastButton: computed('query.page.number', 'meta.page-count',function () {
    let pageCount = get(this, 'meta.page-count');
    let currentPage = get(this, 'query.page.number');
    let showButton = pageCount - 1;
    return currentPage >= showButton;
  }),

  currentPage: computed('query', function () {
    return get(this, 'query.page.number')
  }),
  pageList: computed('meta.page-count', function () {
    let list = [];
    for (let i = 1; i <= get(this, 'meta.page-count'); i++) {
      list.push(i);
    }
    return list;
  }),
  incrementPage: computed('currentPage', function () { //TODO merge this 2 functions
    let currentPage = this.currentPage;
    return currentPage + 1;
  }),
  decrementPage: computed('currentPage', function () {
    let currentPage = this.currentPage;
    return currentPage - 1;
  })
});
