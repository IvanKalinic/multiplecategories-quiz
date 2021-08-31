import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import FrontPage from "../modules/FrontPage";
import Error from "../modules/Error";
import Footer from "../components/Footer";
import Quiz from "../modules/Quiz";
import Result from "../modules/Result";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FrontPage} />
        <Route exact path="/quiz" component={Quiz} />
        <Route exact path="/result" component={Result} />
        <Route exact path="*" component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
