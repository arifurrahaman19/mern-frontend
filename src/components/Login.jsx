import React, { useState } from "react";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000/api";

export const LoginForm = (props) => {
  return (
    <>
      <label htmlFor="email">Email</label>
      <input onChange={props.onchangeHandler} type="email" name="email" id="email" />

      <label htmlFor="password">Password</label>
      <input onChange={props.onchangeHandler} type="password" name="password" id="password" />

      <button onClick={props.userAuthLogin}>Log In</button>
    </>
  );
};

export const SignupForm = (props) => {
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        onChange={props.onchangeHandler}
        placeholder="Name"
        value={props.formData.name}
        type="name"
        name="name"
        id="name"
      />

      <label htmlFor="email">Email</label>
      <input
        onChange={props.onchangeHandler}
        placeholder="Email"
        value={props.formData.email}
        type="email"
        name="email"
        id="email"
      />

      <label htmlFor="password">Password</label>
      <input
        onChange={props.onchangeHandler}
        placeholder="Password"
        value={props.formData.password}
        type="password"
        name="password"
        id="password"
      />

      <button onClick={props.signupFormHandler} type="submit">
        Signup
      </button>
    </form>
  );
};

export const Login = (props) => {
  const { isLoging, comHandler, signupHandler, loginHandler } = props;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const userAuthLogin = async (e) => {
    e.preventDefault();
    console.log(formData);
    const { email, password } = formData;
    try {
      const response = await axios.post("/auth", {
        email,
        password,
        // headers: {
        //   // "x-auth-token":
        //   //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM4NWI0MDRmMWZiMDg0YTU4MjQzYzdkIn0sImlhdCI6MTY2OTcwNjc1NywiZXhwIjoxNjcwMDY2NzU3fQ.XR4WHo6XNP51nsX3Mpe8IvixML2vHsJlffB9ToaJhPk",
        // },
      });
      loginHandler(response?.data?.token);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const onchangeHandler = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const signupFormHandler = (e) => {
    e.preventDefault();
    signupHandler(formData);
  };

  return (
    <div className="login-wrapper">
      {isLoging ? (
        <LoginForm onchangeHandler={onchangeHandler} userAuthLogin={userAuthLogin} />
      ) : (
        <SignupForm onchangeHandler={onchangeHandler} signupFormHandler={signupFormHandler} />
      )}
      {isLoging ? (
        <div>
          <p>OR</p>
          <button onClick={comHandler}>Signup</button>
        </div>
      ) : (
        <div>
          <p>OR</p>
          <button onClick={comHandler}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Login;
