import React, { useRef, useState } from "react";
import Header from "./Header";
import { isValidData } from "../utils/Validate";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const [errrorMessage, seterrrorMessage] = useState(null);

  //useRef hook
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //isValidData();

    console.log(email);
    console.log(password);

    const message = isValidData(email.current.value, password.current.value);
    seterrrorMessage(message);
  };

  const toggleSignForm = () => {
    setSignInForm(!signInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-4/12 absolute bg-black p-12 my-20 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75"
      >
        <h1 className="font-bold text-3xl py-4">
          {signInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!signInForm && (
          <input
            type="text"
            placeholder="UserName"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="Password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-700 font-bold">{errrorMessage}</p>
        <button
          className="p-6 my-6 bg-red-500 w-full"
          onClick={handleButtonClick}
        >
          {signInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-2 hover:cursor-pointer" onClick={toggleSignForm}>
          {signInForm ? "Not Register? Sign Up" : "Already Register? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
