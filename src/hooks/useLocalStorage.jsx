import { useState } from "react";

// custom hook to store and retrieve data from local storage
export default function useLocalStorage(key, initialValue) {
	const [storedValue, setstoredValue] = useState(() => {
		let item = window.localStorage.getItem(key);
		return item ? JSON.parse(item) : initialValue;
	});
	const setValue = value => {
		setstoredValue(value);
		window.localStorage.setItem(key, JSON.stringify(value));
	};
	return [storedValue, setValue];
}
