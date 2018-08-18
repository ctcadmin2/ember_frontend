import { inject as service } from '@ember/service';
import Component from '@ember/component';
import { task } from 'ember-concurrency';
import { computed, set } from '@ember/object';
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
    if (this.isRunning) {
      return 'loading';
    } else {
      return this.responseType;
    }
  }),

  findTask: task(function*() {
    set(this, 'cifChanged', true);
    let companyInfo = this.companyInfo;
    let result;
    try {
      if (this.country == 'RO') {
        result = yield companyInfo.checkOpenApi(this.cif);
      } else {
        result = yield companyInfo.checkVies(this.country, this.cif);
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
