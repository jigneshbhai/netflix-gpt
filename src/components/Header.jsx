import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unSubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-4 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-3.5">
          <img
            className="w-10 h-10"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD6gvzn1GdKNUXEHFYz9x0ZoCq8TCWAXsZwA&usqp=CAU"
            alt="use"
          />
          <button onClick={handleSignOut} className="p-2 font-bold text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
