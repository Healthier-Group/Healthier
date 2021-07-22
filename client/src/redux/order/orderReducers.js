import {
  GET_ORDERS,
  GET_ORDER_BY_ID,
  CREATE_ORDER,
  UPDATE_ORDER,
  DELETE_ORDER,
} from "./orderActions";

const initialState = {
  orders: [],
  currentOrder: {}
}

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return { 
        ...state,
        orders: action.payload
      };
    case GET_ORDER_BY_ID:
      return { 
        ...state,
        currentOrder: action.payload
      };
    case CREATE_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload]
      }
    case UPDATE_ORDER:
      return {
        ...state,
        currentOrder: action.payload
      };
    case DELETE_ORDER:
      return {
        ...state,
        orders: state.orders.filter( order => order.id !== action.payload)
      }
    default:
      return state;
  }
};

export default orderReducer;