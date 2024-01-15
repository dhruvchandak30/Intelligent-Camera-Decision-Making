import React from "react";
import Card from "../components/dashboard/Card";
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
