import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./data";
import cartReducer from "./cart";
import authReducer, { authActions } from "./auth";

const store = configureStore({
  reducer: { data: dataReducer, auth: authReducer, cart: cartReducer },
});

const savedUser = localStorage.getItem("savedUser");

if (savedUser) {
  store.dispatch(authActions.login());

  const parsedUser = JSON.parse(savedUser);
  store.dispatch(authActions.setSavedUser(parsedUser));
}

export default store;
