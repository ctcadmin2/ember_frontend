import { inject as service } from '@ember/service';
import Component from '@ember/component';
import { task } from 'ember-concurrency';
import { get, computed, set } from '@ember/object';
import { empty, alias, or } from '@ember/object/computed';

export default Component.extend({
  countries: service(),
  companyInfo: service(),

  country: 'RO',
  responseType: '',
  cifChanged: false,

  taskRunning: alias('findTask.isRunning'),
  hasStarted: alias('findTask.last.hasStarted'),
  cifEmpty: empty('cif'),
  searchDisabled: or('cifEmpty', 'cifChanged'),
  formClass: computed('taskRunning', 'responseType', function() {
    if (get(this, 'isRunning')) {
      return 'loading';
    } else {
      return get(this, 'responseType');
    }
  }),

  findTask: task(function*() {
    set(this, 'cifChanged', true);
    let companyInfo = get(this, 'companyInfo');
    let result;
    try {
      if (get(this, 'country') == 'RO') {
        result = yield companyInfo.checkOpenApi(get(this, 'cif'));
      } else {
        result = yield companyInfo.checkVies(
          get(this, 'country'),
          get(this, 'cif')
        );
      }
    } catch (error) {
      set(this, 'responseType', 'error');
      result = { error: 'error' };
    }

    this._processResponse(result);
  }).drop(),

  actions: {
    changeCif() {
      set(this, 'cifChanged', false);
      set(this, 'responseType', '');
    }
  },

  //private
  _processResponse(data) {
    if (data.data) {
      set(this, 'responseType', 'success');
    } else {
      set(this, 'responseType', 'error');
    }

    this.returnData(data);
  }
});
