import React from "react";
import { useState, useEffect } from "react";
// import camera from "../../assests/camera.svg";
// import upload from "../../assests/upload.svg";
import { IoCameraOutline } from "react-icons/io5";
import { MdFileUpload } from "react-icons/md";
// import Button from "../Button/Button";
import Button from "../components/Button/Button";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Charts from "../components/Traffic/Charts";
import { useTranslation } from "react-i18next";
import { io } from "socket.io-client";

const Traffic = () => {
  const [detectionResult, setDetectionResult] = useState(null);
  const [errorDetecting, setErrorDetecting] = useState("");
  const { t } = useTranslation();
  const sendTrafficData = (number) => {
    const d = new Date();
    let minutes = d.getMinutes();
    let hours = d.getHours();
    let dateString = hours + ":" + minutes;
    console.log(dateString);
  };
  const [trafficNumber, setTrafficNumber] = useState("");

  useEffect(() => {
    const socket = io("http://localhost:8000");

    socket.on("messageFromTraffic", (number) => {
      console.log("Traffic on Server is on Traffic.jsx ", number);
      setTrafficNumber(number);
      sendTrafficData(number);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  const startObjectDetection = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/start-traffic", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: "Start",
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Start Object Detection", result.detection_result);
        setDetectionResult(result.detection_result);
      } else {
        console.error("Failed to start object detection:", response.statusText);
        setErrorDetecting("Failed to start object detection");
      }
    } catch (error) {
      console.error("Error during object detection request:", error.message);
      setErrorDetecting("Error during object Detection");
    }
  };
  return (
    <div className="homebg h-screen">
      <Navbar />
      <div className=" flex flex-row  justify-around items-center">
        <div className="flex  px-8 items-center justify-center">
          <div className="flex flex-col items-center justify-center ">
            <div>
              <MdFileUpload style={{ color: "white" }} size={140} />
            </div>
            <div className="text-center">
              <Button funcName={startObjectDetection} text="Upload" />
            </div>
            {trafficNumber && (
              <p className="text-white text-2xl">
                Maximum Cars Detected:{trafficNumber}
              </p>
            )}
          </div>
        </div>
        <div className="mt-16 text-center text-3xl font-semibold ">
          <h1 className="text-white">{t("TrafficDataHEading")}</h1>
          <Charts />
        </div>
      </div>
    </div>
  );
};

export default Traffic;
