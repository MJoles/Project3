import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/Home"

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/newjob" component={} />
        {/* <Route exact path="/search" component={Search} /> */}
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>;

export default App;
