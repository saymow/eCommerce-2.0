import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  userConfirmReducer,
  userCreateReducer,
  userDeleteReducer,
  userEditReducer,
  userListReducer,
  userLoginReducer,
  userSetAdminReducer,
  userShowReducer,
} from './reducers/userReducers';
import {
  productListReducer,
  productCreateReducer,
  productDeleteReducer,
  productEditReducer,
  productShowReducer,
} from './reducers/productReducers';

export const ReduxState = {
  userLogin: userLoginReducer,
  userList: userListReducer,
  userConfirm: userConfirmReducer,
  userSetAdmin: userSetAdminReducer,
  userDelete: userDeleteReducer,
  userCreate: userCreateReducer,
  userShow: userShowReducer,
  userEdit: userEditReducer,
  productList: productListReducer,
  productCreate: productCreateReducer,
  productDelete: productDeleteReducer,
  productShow: productShowReducer,
  productEdit: productEditReducer,
};

const reducer = combineReducers(ReduxState);

const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
