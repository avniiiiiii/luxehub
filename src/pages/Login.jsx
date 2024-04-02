import React from "react";
import clientGoogle from "../assets/clientGoogle.jpg";

const Login = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="w-full flex items-center justify-center gap-10">
        <div className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300">
          <img src={clientGoogle} alt="logogoogle" />
          <span className="text-sm text-gray-900"> Sign in with Google</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
