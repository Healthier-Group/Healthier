import axios from 'axios';
import {API_URL, CREATE_USER, GET_ALL_USERS, READ_USER, UPDATE_USER, DELETE_USER, LOGIN, SAVE_TOKEN} from '../../utils/Constants';

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

export function loginUser(login) {
	console.log('LOGIN ACTION', login)
	return async function (dispatch) {
		try{
			const {data} = await axios.post(`${API_URL}auth/login`,
			{email: login.email, password: login.password});
			dispatch({type: SAVE_TOKEN, payload: data.token});
			const user = await axios.get(`${API_URL}auth/user`, 
			{headers: { Authorization: `Bearer ${data.token}` }})
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
		const {data} = await axios.get(`${API_URL}logout`)
		console.log(data)
	}
}
