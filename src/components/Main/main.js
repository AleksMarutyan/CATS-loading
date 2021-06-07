import React from "react";
import Home from "../Home/home";
import About from "../About/about";
import Works from "../Works/works";
import Contacts from "../Contacts/contacts";
import { Route, Switch } from "react-router-dom";
function Main() {
  return (
    <div id="main">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/works" component={Works} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </div>
  );
}

export default Main;
