import React from "react";
import Station1 from "../../assests/Station1.png";
import Station2 from "../../assests/Station2.png";
const Hero = () => {
  return (
    <div
      className="text-white flex  flex-col lg:flex-row items-center justify-around
    "
    >
      <div className="flex flex-col lg:w-1/4  rounded-3xl p-4 bg-gray-500 bg-opacity-60">
        <div className="w-fit">
          <img alt="Station" src={Station1} className=""></img>
        </div>
        <div className="text-xl font-semibold p-8 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          asperiores fuga laboriosam, error accusantium doloremque, rerum
          deserunt sunt illum officia cum explicabo voluptate. Consequuntur
          alias, vel quas cum vitae ab. Cumque quis dolorem aspernatur quas
          veniam ex. Esse harum rem eum sed modi quis recusandae pariatur. Dolor
          voluptates fugit reiciendis.
        </div>
        <div className="flex justify-center">
          <button className="flex items-center justify-center   px-20 py-3 m-4 font-bold text-2xl flex-shrink-0 rounded-2xl bg-gray-600 ">
            Continue
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:w-1/4 rounded-3xl p-4 bg-gray-500 bg-opacity-60">
        <div className="w-fit">
          <img alt="Station" src={Station2} className=""></img>
        </div>
        <div className="text-xl font-semibold p-8 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel
          molestiae vero, in assumenda ratione illum perspiciatis harum
          cupiditate ipsam! Numquam minima fuga molestias odit alias dolore
          porro ratione, commodi aut ex, pariatur quasi? Officiis laboriosam
          modi tempore velit molestiae veniam quisquam ab, dolores ratione
          doloremque obcaecati voluptatibus, vitae accusantium.
        </div>
        <div className="flex justify-center">
          <button className="flex items-center justify-center   px-20 py-3 m-4 font-bold text-2xl flex-shrink-0 rounded-2xl bg-gray-600">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
