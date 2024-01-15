import React, { useEffect, useState } from "react";

const PoliceResponse = () => {
  const [data, setData] = useState("");
  const [detectionResult, setDetectionResult] = useState(null);
  const [imageData, setImageData] = useState(null);

  const startObjectDetection = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/start-detection", {
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
        setDetectionResult(result.detection_result);
      } else {
        console.error("Failed to start object detection:", response.statusText);
      }
    } catch (error) {
      console.error("Error during object detection request:", error.message);
    }
  };

  const isObjectDetected = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/api/data");

      if (response.ok) {
        const result = await response.json();
        console.log(result)
        setData(result.message);

        // Check if the result includes image data
        if (result.image_data) {
          setImageData(result.image_data);
        }
      } else {
        console.error("Failed to fetch data:", response.statusText);
      }
    } catch (error) {
      console.error("Error during data fetch:", error.message);
    }
  };

  isObjectDetected();

  return (
    <div>
      <button
        className="text-xl border-black border-2"
        onClick={startObjectDetection}
      >
        Start Object Detection
      </button>
      <button
        className="text-xl border-black border-2"
        onClick={isObjectDetected}
      >
        Check Object Detection
      </button>
      {detectionResult && <p>Detection Result: {detectionResult}</p>}
      {data && <p>{data}</p>}
      {imageData && (
        <img src={`data:image/png;base64,${imageData}`} alt="Detected Object" />
      )}
    </div>
  );
};

export default PoliceResponse;
