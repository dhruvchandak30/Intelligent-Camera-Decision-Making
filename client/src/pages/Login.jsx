import React, { useState } from "react";
import "./style.css";
import logo from "../assests/logo.svg";
// import { Link } from "react-router-dom";

const Login = ({handleSubmit}) => {

  const [name,setName]=useState("")
  const [password,setPassword]=useState("")
 
  return (
    <div className="h-screen login-bg px-8">
      <div className="py-6">
        <img src={logo} alt="" />
      </div>
      <div className="flex justify-between items-center px-24 mt-10">
        <div className="w-1/2 ">
          <p className="text-gray-300 font-inter text-5xl font-medium leading-normal">
            A solution which{" "}
            <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 bg-clip-text text-transparent font-inter text-5xl font-medium leading-normal">
              saves
            </span>{" "}
            <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 bg-clip-text text-transparent font-inter text-5xl font-medium leading-normal">
              lives
            </span>{" "}
            by connecting accident witnesses with emergency services.
          </p>
        </div>
        <div className="w-1/2 flex justify-end">
          <div className="rounded-3xl bg-opacity-50 bg-[#D2D2D2] w-[390px] h-[420px] px-12 py-[15%]">
            <h3 className="text-black font-inter text-3xl font-bold leading-normal">
              Sign-in
            </h3>
            <form className="mt-4" onSubmit={handleSubmit}
>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-black dark:border-black dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                  placeholder=" "
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  required
                  
                />
                <label
                  for="name"
                  className="peer-focus:font-medium absolute text-sm text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  User Name
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="password"
                  name="floating_password"
                  id="floating_password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-black dark:border-black dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                  placeholder=" "
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  required
                />
                <label
                  for="floating_password"
                  className="peer-focus:font-medium absolute text-sm text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>
              <button
                type="submit"
                className="bg-blue-500 py-2 px-4 rounded-lg"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
