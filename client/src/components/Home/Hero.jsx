import React from "react";
import Station1 from "../../assests/Station1.png";
import Station2 from "../../assests/Station2.png";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
const Hero = () => {
  return (
    <div className="text-white flex h-screen items-center justify-around">
      <div className="rounded-3xl p-7 bg-gray-700 bg-opacity-55 w-[450px]">
        <div>
          <img src={Station1} alt="" width="100%" />
        </div>
        <div className="text-center mb-5">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro,
            fugit suscipit! Tempora repudiandae doloremque eius, cumque quam
            corrupti ipsum fuga dicta praesentium nobis quas quibusdam atque non
            maxime distinctio odit laboriosam? Ratione natus optio facere ab
            dolorum mollitia repellendus porro vel deleniti officiis laudantium
            blanditiis maxime earum, totam accusamus enim!
          </p>
        </div>
        <div className="text-center flex items-center justify-center">
          <Link to="/police">
            {" "}
            <Button text="Detect" />
          </Link>{" "}
        </div>
      </div>
      <div className="rounded-3xl p-7 bg-gray-700 bg-opacity-55 w-[450px]">
        <div>
          <img src={Station2} alt="" width="100%" />
        </div>
        <div className="text-center mb-5">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro,
            fugit suscipit! Tempora repudiandae doloremque eius, cumque quam
            corrupti ipsum fuga dicta praesentium nobis quas quibusdam atque non
            maxime distinctio odit laboriosam? Ratione natus optio facere ab
            dolorum mollitia repellendus porro vel deleniti officiis laudantium
            blanditiis maxime earum, totam accusamus enim!
          </p>
        </div>
        <div className="text-center flex items-center justify-center">
          <Link to="/traffic">
            {" "}
            <Button text="Traffic" />
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default Hero;
