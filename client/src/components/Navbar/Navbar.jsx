import React from "react";
import logo from "../../assests/logo.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="relative">
      <div className=" px-8 items-left">
        <div className="py-6">
          <Link to="/">
            {" "}
            <img src={logo} alt="" />
          </Link>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <ul className="flex gap-x-8 text-white font-inter text-base font-normal">
          <Link className="relative">
            <li className="navbarli">About Us</li>
          </Link>
          <Link className="relative">
            <li className="navbarli">Contact Us</li>
          </Link>
          <Link className="relative" to="/login">
            <li className="navbarli">Login</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
