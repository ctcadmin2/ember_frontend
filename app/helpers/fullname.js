import { helper } from '@ember/component/helper';
import { get } from '@ember/object';

export function fullname([user]/*, hash*/) {
  return `${get(user, 'firstName')} ${get(user, 'lastName')}`;
}

export default helper(fullname);
