// import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

// custome hook for formdta to be stored in local storage
export default function useForm(key, initialValue) {
	const [values, setValues] = useLocalStorage(key, initialValue);

	const handleChanges = e => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	return [values, handleChanges, setValues];
}
