import React from "react";
import { Route, Redirect } from "react-router-dom";

// function reoute unauthentecated users
export default function protectedRoute({ component: Component, ...rest }) {
	return (
		<Route
			{...rest}
			render={props => {
				if (localStorage.getItem("token")) {
					return <Component {...props} />;
				} else {
					return <Redirect to="/Login" />;
				}
			}}
		/>
	);
}
