import React from "react";
import Station1 from "../../assests/Station1.png";
import Station2 from "../../assests/Station2.png";
const Hero = () => {
  return (
    <div
      className="text-white flex  flex-col lg:flex-row items-center justify-around
    "
    >
      <div className="flex flex-col lg:w-1/4  rounded-3xl  bg-gray-500 bg-opacity-60">
        <div className="">
          <img alt="Station" src={Station1} className=""></img>
        </div>
        <div className="text-xl px-4 font-semibold text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum id dicta
          quibusdam tempore? Saepe, rerum voluptate laborum accusamus quaerat,
          ex porro facere aspernatur fugit, necessitatibus perferendis tenetur
          minima iure aliquam maxime accusantium tempore! Quidem repudiandae
          sequi accusantium deserunt commodi! Alias.
        </div>
        <div className="flex justify-center">
          <button className="flex items-center justify-center   px-20 py-3 m-4 font-bold text-2xl flex-shrink-0 rounded-2xl shadow-md  shadow-gray-900 bg-gray-700 hover:bg-gray-600 ">
            Continue
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:w-1/4 rounded-3xl  bg-gray-500 bg-opacity-60">
        <div className="">
          <img alt="Station" src={Station2} className=""></img>
        </div>
        <div className="text-xl px-4 font-semibold  text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
          temporibus, ipsum velit beatae doloremque fuga pariatur sed laudantium
          exercitationem obcaecati sequi aliquam ex quis ratione magni culpa
          animi quo odit modi inventore rem. Itaque libero, doloribus molestias
          vitae voluptatum error.
        </div>
        <div className="flex justify-center">
          <button className="flex items-center justify-center   px-20 py-3 m-4 font-bold text-2xl flex-shrink-0 rounded-2xl shadow-md  shadow-gray-900 bg-gray-700 hover:bg-gray-600">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
