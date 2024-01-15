import React from "react";
import logo from "../../assests/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="text-white flex flex-col lg:flex-row items-center  mb-4">
      <div className="flex items-center">
        <Link to="/">
          <img alt="logo" src={logo} className="mr-[35em]  py-3 h-16"></img>
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex gap-20">
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Contact Us</li>
          <Link to="/login" className="cursor-pointer">
            Login
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
