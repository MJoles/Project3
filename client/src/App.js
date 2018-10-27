import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
// import Search from "./components"
import Nav from "./components/Nav/Nav"



const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        {/* <Route exact path="/newjob" component={} /> */}
        {/* <Route exact path="/search" component={Search} /> */}
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>;

export default App;
