import {
  GET_HISTORIES, 
  CREATE_HISTORY,
  UPDATE_HISTORY, 
  DELETE_HISTORY,
  GET_HISTORY_BY_USER
} from "./historyOrderActions";

const initialState = {
histories: [],
currentUserHistories: []
}

const historyReducer = (state = initialState, action) => {
switch (action.type) {
  case GET_HISTORIES:
    return { 
      ...state,
      histories: action.payload
    }
  case GET_HISTORY_BY_USER:
    return {
      ...state,
      currentUserHistories: action.payload
    } 
  case CREATE_HISTORY:
    return {
      ...state
    }
  case UPDATE_HISTORY:
    return {
      ...state,
      currentUserHistories: action.payload
    }
  case DELETE_HISTORY:
    return {
      ...state
    }
  default:
    return state;
 }
};

export default historyReducer;