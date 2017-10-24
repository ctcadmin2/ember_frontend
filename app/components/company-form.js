import Component from '@ember/component';
import {  none, not } from "@ember/object/computed";

export default Component.extend({
  nameEmpty: none('data.name'),
  showForm: not('nameEmpty')
});
