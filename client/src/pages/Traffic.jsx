import React from "react";
import { useState } from "react";
// import camera from "../../assests/camera.svg";
// import upload from "../../assests/upload.svg";
import { IoCameraOutline } from "react-icons/io5";
import { MdFileUpload } from "react-icons/md";
// import Button from "../Button/Button";
import Button from "../components/Button/Button";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Charts from "../components/Traffic/Charts";

const Traffic = () => {
  const [detectionResult, setDetectionResult] = useState(null);
  const [errorDetecting, setErrorDetecting] = useState("");
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
          </div>
        </div>
        <div className="mt-16 text-center text-3xl font-semibold ">
          <h1 className="text-white">Traffic Data for Raja Park</h1>
          <Charts />
        </div>
      </div>
    </div>
  );
};

export default Traffic;
