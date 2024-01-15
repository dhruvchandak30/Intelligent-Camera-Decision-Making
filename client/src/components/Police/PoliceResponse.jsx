import React, { useEffect, useState } from "react";

const PoliceResponse = () => {
  const [data, setData] = useState("");
  const [detectionResult, setDetectionResult] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [startCheckingRequest, setCheckingRequest] = useState(false);
  const [errorDetecting, setErrorDetecting] = useState("");

  const startObjectDetection = async (mssg) => {
    if (setCheckingRequest) {
      setCheckingRequest(true);
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
          console.log(result.detection_result);
          setDetectionResult(result.detection_result);
        } else {
          console.error(
            "Failed to start object detection:",
            response.statusText
          );
          setErrorDetecting("Failed to start object detection");
          return;
        }
      } catch (error) {
        console.error("Error during object detection request:", error.message);
        setErrorDetecting("Error during object Detection");
      }
    } else {
      console.log("Stopped All Cameras");
    }
  };

  const isObjectDetected = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/api/data");

      if (response.ok) {
        const result = await response.json();
        // console.log(result);
        console.log(result.detection_result);
        if (result.detection_result === data) {
          return;
        } else {
          setData(result.detection_result);
          if (result.image_data) {
            setImageData(result.image_data);
          }
        }
      } else {
        console.error("Failed to fetch data:", response.statusText);
        setErrorDetecting("Failed to fetch Object Data");
      }
    } catch (error) {
      console.error("Error during data fetch:", error.message);
      setErrorDetecting("Error during data fetching");
    }
  };

  const StopCameraHandler = () => {
    setCheckingRequest(false);
  };
  // useEffect(() => {
  //   // setInterval(() => {
  //   //   isObjectDetected();
  //   // }, 8000);
  // }, [startCheckingRequest]);

  return (
    <div>
      {detectionResult && (
        <p className="text-3xl text-black text-bold">
          Detection Result: {detectionResult}
        </p>
      )}
      {data && <p className="text-black text-bold text-2xl">{data}</p>}
      <button
        className="text-xl border-black border-2"
        onClick={startObjectDetection("Start")}
      >
        Start All Camera's
      </button>
      <button
        className="text-xl border-black border-2"
        onClick={startObjectDetection("Stop")}
      >
        Stop All Cameras
      </button>
      <button
        className="text-xl border-black border-2"
        onClick={isObjectDetected}
      >
        Check Response
      </button>

      {imageData && (
        <img src={`data:image/png;base64,${imageData}`} alt="Detected Object" />
      )}
      {errorDetecting && (
        <p className="text-black text-bold text-2xl">{errorDetecting}</p>
      )}
    </div>
  );
};

export default PoliceResponse;
