import React from "react";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error from "./Error";
import Navbar from "./Navbar";
import Service from "./Service";
import Search from "./Search";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <About name="Home" />
          </Route>
          <Route path="/service">
            <Service name="Service" />
          </Route>
          <Route path="/contect">
            <Contact name="Contact" />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route component={Error} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
