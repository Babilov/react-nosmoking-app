import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { Context } from "../..";
import LoginForm from "../../components/UI/forms/LoginForm";
import Loader from "../../components/UI/loader/Loader";

const HomePage = () => {
  const auth = useContext(Context);
  console.log(auth);
  const [user, loading] = useAuthState(auth);
  console.log(user);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : user ? (
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
