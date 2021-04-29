import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Register" component={Register} />
      </Switch>
    );
  }
}

export default Routes;
