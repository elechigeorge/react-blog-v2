import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// import reducers 
import { userRegisterReducer } from "./reducers/user";
import { userLoginReducer } from "./reducers/user";
import { createArticleReducer, getArticleReducer, getSingleArticleReducer } from "./reducers/post"

const reducer = combineReducers({
  
  // user reducers
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,

  // post reducers 
  getArticle: getArticleReducer,
  getSingleArticle: getSingleArticleReducer,
  newArticle: createArticleReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo")!)
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage }
};

const middleware = [thunk];

export type RootState = ReturnType<typeof reducer>

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;