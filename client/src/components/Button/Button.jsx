import React from "react";
import "./Button.css";

const Button = ({ text, funcName }) => {
  return <div className="buttonCSS" onClick={funcName}>{text}</div>;
};

export default Button;
