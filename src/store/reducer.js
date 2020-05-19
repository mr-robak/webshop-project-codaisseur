import { combineReducers } from "redux";
import productsSliceReducer from "./products/reducer";
import cartSliceReducer from "./cart/reducer";

const reducer = combineReducers({
  products: productsSliceReducer,
  cart: cartSliceReducer,
});

export default reducer;
