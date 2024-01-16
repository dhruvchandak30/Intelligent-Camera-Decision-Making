import React from "react";
import loader from "../../assests/preloader.gif";
const PreLoader = () => {
  return (
    <div className="h-screen bg-black flex justify-center items-center">
      <div className="w-[500px] h-[500px] ">
        <img src={loader} alt="" />
      </div>
    </div>
  );
};

export default PreLoader;
