import React from "react";
import Hero from "../components/Home/Hero";
import Navbar from "../components/Home/Navbar";
const dashboard = () => {
  return (
    <div className="h-screen homebg">
      <Navbar />
      <Hero />
    </div>
  );
};

export default dashboard;
