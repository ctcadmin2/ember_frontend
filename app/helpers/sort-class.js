import { helper } from "@ember/component/helper";

export function sortClass([sort, name]) {
  let direction = "";

  if (sort === name) {
    direction = "up";
  } else if (sort === `-${name}`) {
    direction = "down";
  }

  return `sort ${direction} icon`;
}

export default helper(sortClass);
