import React from "react";
import camera from "../../assests/camera.svg";
import upload from "../../assests/upload.svg";
import { IoCameraOutline } from "react-icons/io5";
import { MdFileUpload } from "react-icons/md";

const PoliceResponse = ({
  detectionResult,
  data,
  imageData,
  errorDetecting,
  startObjectDetection,
}) => {
  return (
    <div className="flex justify-around px-8 items-center h-[70%]">
      <div>
        <div>
          <IoCameraOutline style={{ color: "white" }} size={140} />
        </div>
        <div className="text-center">
          <button type="submit" className="bg-blue-500 py-2 px-4 rounded-lg">
            Camera{" "}
          </button>
        </div>
      </div>
      <div>
        <div>
        <MdFileUpload  style={{ color: "white" }} size={140} />
        </div>
        <div className="text-center">
          <button type="submit" className="bg-blue-500 py-2 px-4 rounded-lg">
            Upload{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PoliceResponse;
