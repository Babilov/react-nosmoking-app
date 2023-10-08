import React, { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { Context } from "../..";
import LoginForm from "../../components/UI/forms/LoginForm";

const HomePage = () => {
  const auth = useContext(Context);
  console.log(auth);
  const [user, loading, error] = useAuthState(auth);
  console.log(user);

  return (
    <div>
      {user ? (
        <button onClick={() => auth.signOut()} type="button">
          Logout
        </button>
      ) : (
        <LoginForm />
      )}
    </div>
  );
};

export default HomePage;
