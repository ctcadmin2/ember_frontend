import { helper } from '@ember/component/helper';

export function sortClass([sort, name]) {
  if(sort[sort.indexOf(name) - 1] === '-') {
    return 'sorted descending icon';
  } else {
    return 'sorted ascending icon';
  }
}

export default helper(sortClass);
