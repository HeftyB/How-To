import { axiosWithAuth } from "../../route/axiosWithAuth";

// get data action`
export const getData = links => dispatch => {
	axiosWithAuth()
		.get("http://localhost:5000")
		.then(({ data }) => {
			dispatch({ type: "GET_DATA_SUCCESS", payload: data });
		})
		.catch(error => {
			console.log(error);
			dispatch({
				type: "GET_DATA_FAIL",
				payload: `${error.response.status} : ${error.response.data}`,
			});
			debugger;
		});
};

// action to log user in
export const logInUser = creds => dispatch => {
	axiosWithAuth()
		.post("/api/login", creds)
		.then(res => {
			console.log(res);
			dispatch({
				type: "USER_LOGGED_IN",
				payload: creds.username,
			});
			setTimeout(() => {
				window.localStorage.setItem("token", res.data.token);
			}, 500);
		});
};

// action to register user
export const registerUser = user => dispatch => {
	dispatch({ type: "REGISTER_USER", dispatch: user });
	axiosWithAuth()
		.post("/api/register", user)
		.then(res => {
			console.log(res);
		})
		.catch(error => {
			console.log(error);
		});
};

// action to upvote post
export const upvote = id => dispatch => {
	axiosWithAuth()
		.put(`/howtos/${id}/upvote`)
		.then(({ data }) => {
			dispatch({ type: "UPVOTE", payload: data });
		})
		.catch(error => {
			console.log(error);
		});
};

// action to downvote post
export const downvote = id => dispatch => {
	axiosWithAuth()
		.put(`/howtos/${id}/downvote`)
		.then(({ data }) => {
			dispatch({ type: "DOWNVOTE", payload: data });
		})
		.catch(error => {
			console.log(error);
		});
};

// action to post new how-to
export const addHowTo = data => dispatch => {
	axiosWithAuth()
		.post("/howtos", data)
		.then(({ data }) => {
			console.log("newPost");
			// dispatch({ type: "NEW_POST", payload: data });
		})
		.catch(error => {
			console.log(error);
			debugger;
		});
};

// action to save post to user's fav
export const savePost = post => dispatch => {
	dispatch({ type: "SAVE_POST", payload: post });
};

// action to delete post from user's fav
export const deleteSave = id => dispatch => {
	dispatch({ type: "DELETE_SAVE", payload: id });
};

// console log all users in system
export const getAllUsers = () => {
	axiosWithAuth()
		.get("/api")
		.then(res => {
			console.log(res);
		})
		.catch(error => {
			console.log(error);
			debugger;
		});
};

// action to get al psot from BE
export const getAllHowTo = () => dispatch => {
	axiosWithAuth()
		.get("/howtos")
		.then(res => {
			console.log(res);
			dispatch({ type: "GET_ALL_HOWTO", payload: res.data });
		})
		.catch(error => {
			console.log(error);
			// debugger;
		});
};

export const newPost = post => dispatch => {
	axiosWithAuth()
		.post("/howtos", post)
		.then(res => {
			console.log(res);
			// dispatch({ type: "NEW_POST", payload: post });
		})
		.catch(error => {
			console.log(error);
			debugger;
		});
};

// edit post
export const editPost = (id, data) => dispatch => {
	axiosWithAuth()
		.put(`/howtos/${id}`, data)
		.then(res => {
			console.log(res);
			// dispatch({ type: "EDIT_POST", payload: res.data });
		})
		.catch(error => {
			console.log(error);
			debugger;
		});
};

// delete post
export const deletePost = id => dispatch => {
	axiosWithAuth()
		.delete(`/howtos/${id}`)
		.then(res => {
			console.log(res);
			// dispatch({ type: "DELETE_POST", payload: res.data });
		});
};

// action to get post made by user
export const getMyPost = () => dispatch => {
	axiosWithAuth()
		.get("/howtos/creator")
		.then(res => {
			console.log(res);
			dispatch({ type: "GET_MY_POST", payload: res.data });
		})
		.catch(error => {
			console.log(error);
		});
};
