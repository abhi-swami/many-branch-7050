import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./Auth/auth.reducer";
import { searchReducer } from "./Search/search.reducer";
import { cartReducer } from "./Cart/cart.reducer";

import thunk from "redux-thunk";
const rootReducer = combineReducers({
  authReducer,
  searchReducer,
  cartReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
