import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register/index";
import Login from "../components/LoginUser/index";
import Logout from "../components/Logout/index";
import Dashboard from "../pages/Dashboard/index"
import Appointment from "../pages/Appointment/index"


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Logout" component={Logout} />
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/Appointment/New" component={Appointment} />
      </Switch>
    );
  }
}

export default Routes;
