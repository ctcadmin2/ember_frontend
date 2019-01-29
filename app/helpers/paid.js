import { helper } from '@ember/component/helper';

export function paid(params /*, hash*/) {
  let klass = params[0] ? 'check' : 'remove';

  return `large ${klass} icon`;
}

export default helper(paid);
