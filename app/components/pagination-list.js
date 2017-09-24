import Ember from 'ember';

export default Ember.Component.extend({
  firstPage: Ember.computed.equal('meta.prev_page', 1),
  lastPage: Ember.computed('meta.{next_page,total_pages}', function() {
    if (this.get('meta.next_page') === this.get('meta.total_pages')) {
      return true;
    }
  }),
  pageList: Ember.computed('meta.total_pages', function(){
    let list = [];
    for (let i = 1; i <= this.get('meta.total_pages'); i++) {
      list.push(i);
    }
    return list;
  })
});
