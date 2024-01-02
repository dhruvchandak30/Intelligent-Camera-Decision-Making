import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.jpg";
const NavBar = () => {
  return (
    <div
      style={{
        color: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "",
        borderBottom: "2px solid white",
      }}
    >
      <Text marginTop={"1rem"} fontSize={"2rem"}>
        <Link to="/">
          <img
            src={logo}
            style={{ width: "80px", float: "left" }}
            alt="logo"
          ></img>
        </Link>
      </Text>
      <Text marginTop={"1rem"} fontSize={"2rem"}>
        <Link to="/home"> Home</Link>
      </Text>
      <Text marginTop={"1rem"} fontSize={"2rem"}>
        <Link to="/contact"> Contact Us</Link>
      </Text>
    </div>
  );
};

export default NavBar;
