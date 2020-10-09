import React from "react";
import useDarkMode from "../../hooks/useDarkMode";

// dark mode toggle component
export default function Toggle() {
	const [darkMode, setDarkMode] = useDarkMode(false);
	const toggleMode = e => {
		console.log(e);
		e.preventDefault();
		setDarkMode(!darkMode);
	};
	return (
		<>
			<sup>Dark Mode</sup>
			<label className="switch" onClick={toggleMode}>
				<input type="checkbox" />
				<span className="slider round"></span>
			</label>
		</>
	);
}
