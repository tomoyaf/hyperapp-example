import { h } from "hyperapp";
import { Route, Switch } from "@hyperapp/router";
import config from "./config";

import Top from "./pages/Top";
import NotFound404 from "./pages/NotFound404";

export default (state, actions) => (
  <Switch>
    <Route
      path={`/`}
      render={({location, match}) =>
        Top({ location, match, ...state }, actions)
      }
    />
    <Route
      render={({location, match}) =>
        NotFound404({location, match, ...state}, actions)
      }
    />
  </Switch>
);
