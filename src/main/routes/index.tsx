import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";

import { Home, Plans, Checkout } from "presentation/pages";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/planos/:sku" exact component={Plans} />
        <Route path="/checkout" exact component={Checkout} />
      </Switch>
    </BrowserRouter>
  );
};
