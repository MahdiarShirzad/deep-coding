import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./data";
import authReducer from "./auth";

const store = configureStore({
  reducer: { data: dataReducer, auth: authReducer },
});

export default store;
