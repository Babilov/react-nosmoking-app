import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import App from "./App";
import { store } from "./store";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

initializeApp({
  apiKey: "AIzaSyBnFj-LOetIKwKDsdQoVAj9pQkNSc1m1OE",
  authDomain: "nosmokingapp-7ff9b.firebaseapp.com",
  projectId: "nosmokingapp-7ff9b",
  storageBucket: "nosmokingapp-7ff9b.appspot.com",
  messagingSenderId: "415253479666",
  appId: "1:415253479666:web:116e0de8870e042bf3106b",
  measurementId: "G-VV2SJPVC59",
});

export const Context = createContext({});

const auth = getAuth();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider value={auth}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Context.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
