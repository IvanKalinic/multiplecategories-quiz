import React, { memo, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const Error = lazy(() => import("../modules/Error"));
const Quiz = lazy(() => import("../modules/Quiz"));
const Result = lazy(() => import("../modules/Result"));
const FrontPage = lazy(() => import("../modules/FrontPage"));

const Routes = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/result" component={Result} />
          <Route exact path="*" component={Error} />
        </Switch>
        <Footer />
      </Suspense>
    </Router>
  );
};

export default memo(Routes);
