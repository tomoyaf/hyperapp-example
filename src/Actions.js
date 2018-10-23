import { location } from "@hyperapp/router";

export default {
  location: location.actions,
  down: value => state => ({ count: state.count - value }),
  up: value => state => ({ count: state.count + value })
};
