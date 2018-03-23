import { helper } from '@ember/component/helper';

export function routeNameHelper([route, action]) {
  return `${route}.${action}`;
}

export default helper(routeNameHelper);
