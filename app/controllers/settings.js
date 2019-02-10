import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';
import { computed } from '@ember/object';

export default Controller.extend({
  prefs: alias('model'),
  main: computed('prefs', function() {
    return this.prefs.main;
  }),
  company: computed('prefs', function() {
    return this.prefs.company;
  })
});
