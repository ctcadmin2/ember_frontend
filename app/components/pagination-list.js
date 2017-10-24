import {computed} from '@ember/object';
import {equal} from '@ember/object/computed';
import Component from '@ember/component';
import { get } from "@ember/object";

export default Component.extend({
  firstPage: equal('meta.prev_page', 1),
  lastPage: computed('meta.{next_page,total_pages}', function () {
    if (get(this, 'meta.next_page') === get(this, 'meta.total_pages')) {
      return true;
    }
  }),
  pageList: computed('meta.total_pages', function () {
    let list = [];
    for (let i = 1; i <= get(this, 'meta.total_pages'); i++) {
      list.push(i);
    }
    return list;
  })
});
