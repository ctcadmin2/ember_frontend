import {computed} from '@ember/object';
import {equal, lte} from '@ember/object/computed';
import Component from '@ember/component';
import { get } from "@ember/object";

export default Component.extend({
  prevButton: equal('query.page.number', 1),
  firstButton: lte('query.page.number', 2),

  nextButton: computed('meta.page_count', 'query.page.number', function () {
    return get(this, 'meta.page_count') === get(this, 'query.page.number');
  }),
  lastButton: computed('query.page.number', 'meta.page_count',function () {
    let pageCount = get(this, 'meta.page_count');
    let currentPage = get(this, 'query.page.number');
    let showButton = pageCount - 1;
    return currentPage >= showButton;
  }),

  currentPage: computed('query', function () {
    return get(this, 'query.page.number')
  }),
  pageList: computed('meta.page_count', function () {
    let list = [];
    for (let i = 1; i <= get(this, 'meta.page_count'); i++) {
      list.push(i);
    }
    return list;
  }),
  incrementPage: computed('currentPage', function () { //TODO merge this 2 functions
    let currentPage = get(this, 'currentPage');
    return currentPage + 1;
  }),
  decrementPage: computed('currentPage', function () {
    let currentPage = get(this, 'currentPage');
    return currentPage - 1;
  })
});
