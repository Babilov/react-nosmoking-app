import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { Context } from "../../../index";

const LoginForm = () => {
  const auth = useContext(Context);

  const handleClick = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
  };

  return (
    <form>
      <h2>Login here</h2>
      <button onClick={handleClick} type="button">
        Login with Google
      </button>
    </form>
  );
};

export default LoginForm;
