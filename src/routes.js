import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./auth";

import Login from "./pages/Login";

import ListRepos from "./pages/ListRepos";

import RepoDetail from "./pages/RepoDetail";

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
			{...rest}
			render={props =>
				isAuthenticated() ? (
					<Component {...props} />
				) : (
					<Redirect to={{ pathname: "/", state: { from: props.location } }} />
				)
			}
	/>
);

const Routes = () => (
	<BrowserRouter>
		<Switch>
		<Route exact path="/" component={Login} />
		<PrivateRoute exact path= "/repos" component={ListRepos} />
		<PrivateRoute path= "/repos/:name/details" component={RepoDetail} />
		</Switch>
	</BrowserRouter>
);

export default Routes;