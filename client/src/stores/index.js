import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth/auth.reducer";
import currentUserReducer from "./currentUser/currentUser.reducer";

const rootReducer = combineReducers({
  users : authReducer,
  currentUser: currentUserReducer,
})

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, createComposer(applyMiddleware(thunk)));   