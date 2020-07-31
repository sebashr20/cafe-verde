import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "views";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" render={(props) => <Home {...props} />} />
      </Switch>
    </BrowserRouter>
  );
};
