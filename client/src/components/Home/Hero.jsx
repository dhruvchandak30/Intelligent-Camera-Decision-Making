import React from "react";
import Station1 from "../../assests/Station1.png";
import Station2 from "../../assests/Station2.png";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="text-white flex h-screen items-center justify-around">
      <div className="rounded-3xl p-7 bg-gray-700 bg-opacity-55 w-[450px]">
        <div>
          <img src={Station1} alt="" width="100%" />
        </div>
        <div className="text-center mb-5">
          <p>{t("violence")}</p>
        </div>
        <div className="text-center flex items-center justify-center">
          <Link to="/police">
            {" "}
            <Button text={t("DetectButton")} />
          </Link>{" "}
        </div>
      </div>
      <div className="rounded-3xl p-7 bg-gray-700 bg-opacity-55 w-[450px]">
        <div>
          <img src={Station2} alt="" width="100%" />
        </div>
        <div className="text-center mb-5">
          <p>{t("traffic")}</p>
        </div>
        <div className="text-center flex items-center justify-center">
          <Link to="/traffic">
            {" "}
            <Button text={t("TrafficButton")} />
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default Hero;
