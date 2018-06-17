import Route from '@ember/routing/route';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
import { set } from '@ember/object';

export default Route.extend(UnauthenticatedRouteMixin, {
  routeIfAlreadyAuthenticated: 'home',

  model() {
    let user = this.store.createRecord('user');
    set(user, 'lang', 'en');
    return user;
  }
});
