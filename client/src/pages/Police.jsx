import React, { useState } from "react";
import PoliceResponse from "../components/Police/PoliceResponse";
import Button from "../components/Button/Button";
import Navbar from "../components/Navbar/Navbar";

const Police = () => {
  const [detectionResult, setDetectionResult] = useState(null);
  const [data, setData] = useState("");
  const [imageData, setImageData] = useState(null);
  const [errorDetecting, setErrorDetecting] = useState("");

  const startObjectDetection = async (mssg) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/start-detection", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: mssg,
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
      <Navbar/>
      <PoliceResponse
        detectionResult={detectionResult}
        data={data}
        imageData={imageData}
        errorDetecting={errorDetecting}
        startObjectDetection={startObjectDetection}
      />
    </div>
  );
};

export default Police;
