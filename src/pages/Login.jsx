import React from "react";
import clientGoogle from "../assets/clientGoogle.jpg";

const Login = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="w-full flex items-center justify-center gap-10">
        <img src={clientGoogle} alt="logogoogle" />{" "}
        <span className="text-sm text-gray-900"> Sign in with Google</span>
      </div>
    </div>
  );
};

export default Login;
