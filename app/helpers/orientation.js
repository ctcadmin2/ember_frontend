import { helper } from "@ember/component/helper";

export default helper(function orientation(params) {
  if (params[0]) {
    return "up";
  } else {
    return "down";
  }
});
