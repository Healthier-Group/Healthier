import {
    GET_ORDER_PRODUCTS,
    GET_ORDER_PRODUCT_BY_ID,
    CREATE_ORDER_PRODUCT,
    UPDATE_ORDER_PRODUCT,
    DELETE_ORDER_PRODUCT,
    GET_ORDER_PRODUCTS_BY_ORDER
  } from "./orderProductActions";
  
  const initialState = {
    orderProducts: [],
    currentOP:{}
  }
  
  const orderProductReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ORDER_PRODUCTS:
        return { 
          ...state,
          orders: action.payload
        };
      case GET_ORDER_PRODUCT_BY_ID:
        return { 
          ...state,
          currentOrder: action.payload
        };
      case GET_ORDER_PRODUCTS_BY_ORDER:
          return {
            ...state,
            orderProducts: action.payload  
          }
      case CREATE_ORDER_PRODUCT:
        return {
          ...state
        }
      case UPDATE_ORDER_PRODUCT:
        return {
          ...state,
          currentOP: action.payload
        };
      case DELETE_ORDER_PRODUCT:
        return {
          ...state,
          orderProducts: state.orderProducts.filter(OP => OP.id !== action.payload)
        }
      default:
        return state;
    }
  };
  
  export default orderProductReducer;