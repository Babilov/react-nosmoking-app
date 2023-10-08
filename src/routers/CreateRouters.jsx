import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import LoginPage from "../pages/loginPage/LoginPage";

const CreateRouters = () => {
  const user = false;
  return (
    <Routes>
      <Route path="/" Component={HomePage}></Route>
      <Route path="/login" Component={LoginPage}></Route>
    </Routes>
  );
};

export default CreateRouters;
