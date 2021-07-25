import { WISH_LIST_ADD_ITEM, WISH_LIST_REMOVE_ITEM } from "./actionsWishList";

const wishListReducer = (state = { wishListItems: [] }, action) => {
  switch (action.type) {
    case WISH_LIST_ADD_ITEM:
      const item = action.payload;
      console.log("WLitems en reducer", item)
      //chequeo si el producto ya existe en el carrito
      const existItem = state.wishListItems.find((x) => x.product === item.product);
      if (existItem) {
        //si existe lo reemplazo 
        return {
          ...state,
          wishListItems: state.wishListItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        //si no existe lo agrego
        return { ...state, wishListItems: [...state.wishListItems, item] };
      }
    case WISH_LIST_REMOVE_ITEM:
      return {
        ...state,
        wishListItems: state.wishListItems.filter((x) => x.product !== action.payload),
      };
    default:
      return state;
  }
};

export default wishListReducer 