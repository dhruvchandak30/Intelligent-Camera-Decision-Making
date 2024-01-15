import React from "react";

const PoliceResponse = ({
  detectionResult,
  data,
  imageData,
  errorDetecting,
  startObjectDetection,
}) => {
  return (
    <div>
      {detectionResult && (
        <p className="text-3xl text-black text-bold">
          Detection Result: {detectionResult}
        </p>
      )}

      <button
        className="text-xl border-black border-2"
        onClick={() => startObjectDetection("Start")}
      >
        Start Camera
      </button>

      <button
        className="text-xl border-black border-2"
        onClick={() => startObjectDetection("Stop")}
      >
        Stop Cameras
      </button>

      {/* {imageData && (
        <img src={`data:image/png;base64,${imageData}`} alt="Detected Object" />
      )} */}

      {errorDetecting && (
        <p className="text-black text-bold text-2xl">{errorDetecting}</p>
      )}
    </div>
  );
};

export default PoliceResponse;
