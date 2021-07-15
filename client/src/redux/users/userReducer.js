import { GET_ALL_USERS, CREATE_USER, UPDATE_USER, READ_USER, DELETE_USER, LOGIN, SAVE_TOKEN} from '../../utils/Constants';

const initialState = {
	users: [],
	userDetail: undefined,
	currentUser: undefined,
	userToken: undefined,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_USERS:
			return {
				...state,
				users: action.payload,
			};
		case CREATE_USER:
			return {
				...state,
				userDetail: action.payload,
			};
		case READ_USER:
			return {
				...state,
				userDetail: action.payload,
			};
		case UPDATE_USER:
			return {
				...state,
				userDetail: action.payload,
			};
		case DELETE_USER:
			return {
				...state,
				userDetail: action.payload,
			};
		case SAVE_TOKEN:
			console.log(SAVE_TOKEN)
			return {
				...state,
				userToken: action.payload,
			}
		case LOGIN:
			console.log('LOGIN REDUCER', action.payload)
			return {
				...state,
				currentUser: action.payload,
			}
		default:
			return state;
	}
};
export default userReducer;
