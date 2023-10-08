import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = configureStore(
  { reducer: userReducer },
  composeWithDevTools()
);
