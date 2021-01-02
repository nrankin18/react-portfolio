import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/home";
import Aviation from "./pages/aviation";
import Contact from "./pages/contact";
import FETools from "./pages/fetools";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aviation" component={Aviation} />
        <Route path="/contact" component={Contact} />
        <Route path="/FETools" component={FETools} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
