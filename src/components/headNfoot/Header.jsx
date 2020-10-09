import React from "react";
import { Link } from "react-router-dom";
import logo from "../../photos/how-to-logo.png";

// header component
export default function Header() {
	return (
		<div className="headers">
			<Link to="/">
				<img id="log" src={logo} alt="logo" />
			</Link>
		</div>
	);
}
