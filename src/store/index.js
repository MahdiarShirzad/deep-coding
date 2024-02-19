import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./data";
import authReducer, { authActions } from "./auth";

const store = configureStore({
  reducer: { data: dataReducer, auth: authReducer },
});

const savedUser = localStorage.getItem("savedUser");

if (savedUser) {
  // اگر اطلاعات کاربر ذخیره شده باشد، اعمال لاگین بر روی آن
  store.dispatch(authActions.login());

  // همچنین می‌توانید اطلاعات کاربر را از local storage یا session storage بخوانید و در استیت ذخیره کنید
  const parsedUser = JSON.parse(savedUser);
  store.dispatch(authActions.setSavedUser(parsedUser));
}

export default store;
