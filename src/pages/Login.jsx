import React from "react";
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import { app } from "../Firebase.config.jsx";
import { ToastContainer, toast } from "react-toastify";
import clientGoogle from "../assets/clientGoogle.jpg";
import clientgithub from "../assets/clientgithub.jpg";

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  // ============== Google Login Start here =====================

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // ============== Google Login End here =======================
  // ============== Logout Start here ===========================
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toast.success("Log Out Successfully!");
        // dispatch(removeUser());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // ============== Logout End here =============================
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="w-full flex items-center justify-center gap-10">
        <div
          onClick={handleLogin}
          className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-pink-700 cursor-pointer duration-300"
        >
          <img className="w-8" src={clientGoogle} alt="logogoogle" />
          <span className="text-sm text-gray-900"> Sign in with Google</span>
        </div>
        <button
          onClick={handleSignOut}
          className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300"
        >
          Sign out
        </button>
      </div>
      <div className="w-full flex items-center justify-center gap-10">
        <div className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-pink-700 cursor-pointer duration-300">
          <img className="w-8" src={clientgithub} alt="logogithub" />
          <span className="text-sm text-gray-900"> Sign in with Github</span>
        </div>
        <button className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">
          Sign out
        </button>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Login;
//whenever a user logs in we need to pass the info in redux as userinfo//
