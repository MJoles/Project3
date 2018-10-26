import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
// import Search from "./components"
import Nav from "./components/Nav/Nav"



const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/Home" component={Home} />
        {/* <Route exact path="/newjob" component={} /> */}
        {/* <Route exact path="/search" component={Search} /> */}
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>;

export default App;
