import axios from 'axios';
import {API_URL, CREATE_USER, GET_ALL_USERS, READ_USER, UPDATE_USER, DELETE_USER, LOGIN, LOGOUT} from '../../utils/Constants';

export function getAllUsers() {
	return async function (dispatch) {
		const {data} = await axios.get(`${API_URL}users/getAll`);
		dispatch({type: GET_ALL_USERS, payload: data});
	};
}

export function createUser(user) {
	return async function (dispatch) {
		const {data} = await axios.post(`${API_URL}users/addUser`, user);
		dispatch({type: CREATE_USER, payload: data});
	};
}

export function readUser(id) {
	return async function (dispatch) {
		const {data} = await axios.get(`${API_URL}users/getUser/${id}`);
		dispatch({type: READ_USER, payload: data});
	};
}

export function updateUser(user) {
	return async function (dispatch) {
		const {data} = await axios.put(
			`${API_URL}users/updateuser/${user.id}`,
			user
		);
		dispatch({type: UPDATE_USER, payload: data});
	};
}

export function deleteUser(id) {
	return async function (dispatch) {
		const {data} = await axios.delete(
			`${API_URL}users/delete/${id}`
		);
		dispatch({type: DELETE_USER, payload: data});
	};
}

export function fetchAuthUser () {
	console.log("Fetching")
	return async (dispatch) => {
		console.log("pre try")
		try {
			const user = await axios.get(`${API_URL}auth/user`, 
			{withCredentials: true})
			if (user){
				console.log('user:' , user)
				localStorage.setItem('profile', JSON.stringify(user));
				dispatch({type: LOGIN, payload:user})
			} else {
				console.log('user:', user);
			}
		}catch (e){
			console.log("Not properly authenticated");
			// history.push("/login/error");
		}
	}
};

export function loginUser(login) {
	console.log('LOGIN ACTION', login)
	return async function (dispatch) {
		try{
			const {data} = await axios.post(`${API_URL}auth/login`, 
			{email:login.email, password: login.password},
			{withCredentials: true})
			console.log(data)
			const user = await axios.get(`${API_URL}auth/user`, 
			{withCredentials: true})
			localStorage.setItem('profile', JSON.stringify(user.data));
			dispatch({type: LOGIN, payload:user.data})
		}catch (e){
			console.log(e.message)
		}
	}
}

export function logOutUser() {
	console.log('LOGOUT ACTION')
	return async function (dispatch) {
		try{
			await localStorage.removeItem('profile')
			console.log("pase la wea")
			const {data} = await axios.get(`${API_URL}auth/logout`, 
			{withCredentials: true})
			console.log(data)
			dispatch({type: LOGOUT})
		}catch (e){
			console.log(e.message)
		}
	}
}


