import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth/auth.reducer";
import currentUserReducer from "./currentUser/currentUser.reducer";
import { PaymentReducers } from "./payment/paymetn.reducer";
import { questionsReducer } from "./questions/questionReducer";
import sidebarReducer from "./sidebar/sidebar.reducer";

const rootReducer = combineReducers({
  users : authReducer,
  currentUser: currentUserReducer,
  question: questionsReducer,
  sidebar: sidebarReducer,
  payment: PaymentReducers
})

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, createComposer(applyMiddleware(thunk)));   