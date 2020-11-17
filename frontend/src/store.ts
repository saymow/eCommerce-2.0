import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { shopPaginationReducer } from "./reducers/paginationReducers";
import { wishListReducer } from "./reducers/wishListReducers";
import { ON_SERVER } from "./utils/constants";

export const reduxStore = {
  shopPagination: shopPaginationReducer,
  wishList: wishListReducer,
};

const reducer = combineReducers(reduxStore);

const initialState: Record<any, any> = {};

if (!ON_SERVER) {
  const wishListFromStorage = localStorage.getItem("eCommerce2.0:wishList")
    ? JSON.parse(localStorage.getItem("eCommerce2.0:wishList") as string)
    : undefined;

  if (wishListFromStorage) {
    initialState["wishList"] = wishListFromStorage;
  }
}

const middlewares = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;