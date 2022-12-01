import React, { useState } from "react";
import Login from "../components/Login";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const history = useNavigate();
  const [isLoging, setIsLogin] = useState(true);
  const componentHandler = (e) => {
    e.preventDefault();
    setIsLogin(!isLoging);
    console.log("isLoging=>", isLoging);
  };

  const signupHandler = (data) => {
    console.log("isLoging=>", data);
  };

  const userLoginHandler = (data) => {
    localStorage.setItem("authToken", JSON.stringify(data));
    history("/dashboard");
  };

  return (
    <div>
      <Login
        isLoging={isLoging}
        signupHandler={signupHandler}
        comHandler={componentHandler}
        loginHandler={userLoginHandler}
      />
    </div>
  );
};

export default Auth;
