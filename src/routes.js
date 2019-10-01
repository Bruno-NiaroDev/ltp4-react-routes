import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => (
    <BrowserRouter>
        <Switch>
        <Route exact path="/" component={() => <h1>Hello</h1>} />
        <Route exact path="/repos" component={() => <h1>Repos</h1>} />
        <Route path="/repos/:name/details" 
            component={() => <h1>Repo Detail</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;