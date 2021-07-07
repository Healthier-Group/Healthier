import { GET_ALL_USERS, CREATE_USER, UPDATE_USER, READ_USER, DELETE_USER} from '../../utils/Constants';

const initialState = {
	users: [],
	userDetail: undefined,
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
				users: action.payload,
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
		default:
			return state;
	}
};
export default userReducer;
