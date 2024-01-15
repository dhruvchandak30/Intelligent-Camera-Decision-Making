import React from "react";
import logo from "../../assests/logo.svg";

const Navbar = () => {
  return (
    <div className="text-white flex flex-col lg:flex-row items-center justify-around">
      <div>
        <img alt="logo" src={logo}></img>
      </div>
      <div>
        <ul className="flex gap-20">
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
