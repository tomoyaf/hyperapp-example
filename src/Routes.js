import Top from "./pages/Top";
import { h } from "hyperapp";
import { Route } from "@hyperapp/router";

export default (state, actions) => (
  <div>
    <Route
      parent
      path="/"
      render={(location, match) => Top({ location, match, ...state }, actions)}
    />
  </div>
);
