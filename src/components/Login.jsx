import React, { useRef, useState } from "react";
import Header from "./Header";
import { isValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACK_LOGO, USER_AVATAR } from "../utils/constant";

const Login = () => {
  const dispatch = useDispatch();
  const [signInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  //useRef hook
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = async () => {
    const message = isValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) {
      // If there's an error message, display it in the toast
      toast.error(message, { position: "top-right", autoClose: 3000 });
      return;
    }

    try {
      let successMessage = "";

      if (!signInForm) {
        // signup logic
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value,
          photoURL: USER_AVATAR,
        }).then(() => {
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
        });

        successMessage = "User successfully registered!";
      } else {
        // signIn logic
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        const user = userCredential.user;

        successMessage = "User successfully signed in!";
      }

      // Display success message in the toast
      toast.success(successMessage, { position: "top-right", autoClose: 2000 });
    } catch (error) {
      // Display a generic error message for all errors
      toast.error("An error occurred. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const toggleSignForm = () => {
    setSignInForm(!signInForm);
  };

  return (
    <div>
      <Header />
      <div className="fixed inset-0 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={BACK_LOGO}
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
            ref={name}
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
