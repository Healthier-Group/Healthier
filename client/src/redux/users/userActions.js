
import axios from "axios";
import {
  API_URL,
  CREATE_USER,
  GET_ALL_USERS,
  READ_USER,
  UPDATE_USER,
  DELETE_USER,
  LOGIN,
  LOGOUT,
} from "../../utils/Constants";
import swal from "sweetalert";

export function getAllUsers() {
  return async function (dispatch) {
    const { data } = await axios.get(`${API_URL}users/getAll`);
    dispatch({ type: GET_ALL_USERS, payload: data });
  };
}

export function createUser(user) {
  return async function (dispatch) {
    const { data } = await axios.post(`${API_URL}users/addUser`, user);
    dispatch({ type: CREATE_USER, payload: data });
  };
}

export function readUser(id) {
  return async function (dispatch) {
    const { data } = await axios.get(`${API_URL}users/getUser/${id}`);
    dispatch({ type: READ_USER, payload: data });
  };
}

export function updateUser(user) {
  return async function (dispatch) {
    const { data } = await axios.put(
      `${API_URL}users/updateuser/${user.id}`,
      user
    );
    dispatch({ type: UPDATE_USER, payload: data });
  };
}

export function deleteUser(id) {
  return async function (dispatch) {
    const { data } = await axios.delete(`${API_URL}users/delete/${id}`);
    dispatch({ type: DELETE_USER, payload: data });
  };
}

export function fetchAuthUser() {
  return async (dispatch) => {
    try {
      const user = await axios.get(`${API_URL}auth/user`, {
        withCredentials: true,
      });
      if (user) {
        localStorage.setItem("profile", JSON.stringify(user));
        dispatch({ type: LOGIN, payload: user });
      } else {
        throw new Error("Error fetching user");
      }
    } catch (e) {
      swal(e.message, "ha sucedido un error", "error");
    }
  };
}

export function loginUser(login) {
  return async function (dispatch) {
    try {
      await axios.post(
        `${API_URL}auth/login`,
        { email: login.email, password: login.password },
        { withCredentials: true }
      );
      const user = await axios.get(`${API_URL}auth/user`, {
        withCredentials: true,
      });
      localStorage.setItem("profile", JSON.stringify(user.data));
      dispatch({ type: LOGIN, payload: user.data });
    } catch (e) {
      swal(e.message, "ha sucedido un error", "error");
    }
  };
}

export function logOutUser() {
  return async function (dispatch) {
    try {
      await localStorage.removeItem("profile");
      await localStorage.removeItem("cartItems");
      await localStorage.removeItem("shippingAddress");
      await localStorage.removeItem("wishListItems");
      await axios.get(`${API_URL}auth/logout`, { withCredentials: true });
      dispatch({ type: LOGOUT });
    } catch (e) {
      console.log(e.message);
    }
  };
}

import axios from 'axios';
import { CREATE_USER, GET_ALL_USERS, READ_USER, UPDATE_USER, DELETE_USER, LOGIN, LOGOUT} from '../../utils/Constants';
import swal from 'sweetalert'

export function getAllUsers() {
	return async function (dispatch) {
		const {data} = await axios.get(`/users/getAll`);
		dispatch({type: GET_ALL_USERS, payload: data});
	};
}

export function createUser(user) {
	return async function (dispatch) {
		const {data} = await axios.post(`/users/addUser`, user);
		dispatch({type: CREATE_USER, payload: data});
	};
}

export function readUser(id) {
	return async function (dispatch) {
		const {data} = await axios.get(`/users/getUser/${id}`);
		dispatch({type: READ_USER, payload: data});
	};
}

export function updateUser(user) {
	return async function (dispatch) {
		const {data} = await axios.put(
			`/users/updateuser/${user.id}`,
			user
		);
		dispatch({type: UPDATE_USER, payload: data});
	};
}

export function deleteUser(id) {
	return async function (dispatch) {
		const {data} = await axios.delete(
			`/users/delete/${id}`
		);
		dispatch({type: DELETE_USER, payload: data});
	};
}

export function fetchAuthUser () {
	return async (dispatch) => {
		try {
			const user = await axios.get(`/auth/user`, 
			{withCredentials: true})
			if (user){
				localStorage.setItem('profile', JSON.stringify(user));
				dispatch({type: LOGIN, payload:user})
			} else {
				throw new Error('Error fetching user')
			}
		}catch (e){
			swal(e.message,'ha sucedido un error','error');
		}
	}
};

export function loginUser(login) {
	return async function (dispatch) {
		try{
			await axios.post(`/auth/login`, 
			{email:login.email.toLowerCase(), password: login.password},
			{withCredentials: true})
			const user = await axios.get(`/auth/user`, 
			{withCredentials: true})
			localStorage.setItem('profile', JSON.stringify(user.data));
			dispatch({type: LOGIN, payload:user.data})
		}catch (e){
			swal(e.message,'ha sucedido un error','error');
		}
	}
}

export function logOutUser() {
	return async function (dispatch) {
		try{
			await localStorage.removeItem('profile')
			await axios.get(`/auth/logout`, 
			{withCredentials: true})
			dispatch({type: LOGOUT})
		}catch (e){
			console.log(e.message)
		}
	}
}

export function sendEmail(email,type){
	return async function (dispatch) {
		try{
			await axios.post(`/auth/email`,{email,type})
		}catch (e){
			console.log(e.message)
		}
	}
}

export function	resetPass(token,newPassword){
	return async function (dispatch) {
		try{
			await axios.post(`/auth/passwordreset`,{token,newPassword})
		}catch (e){
			console.log(e.message)
		}
	}
}



