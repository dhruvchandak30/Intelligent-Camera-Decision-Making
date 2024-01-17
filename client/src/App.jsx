import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import Police from "./pages/Police";
import Traffic from "./components/Traffic/Traffic";
import PreLoader from "./components/preLoader/PreLoader";
import { io } from "socket.io-client";

function App() {
  const [loader, setLoader] = useState(true);
  const [isloggedin, setLoggedin] = useState(false);
  const [status, setStatus] = useState(false);
  const [messages, setMessages] = useState({
    img: "",
    title: "",
  });

  const alert_message =
    "WARNING..!! Suspicious Activity Detected. Confirm if the detected emergence is an actual emergency or not.";

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedin(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  useEffect(() => {
    const socket = io("http://localhost:8000");
    socket.on("messageFromServer", (message, image_url) => {
      console.log(message, image_url);
      setMessages({
        img: image_url,
        title: message,
      });
      setStatus(true);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendNotification = async (e) => {
    console.log("Notification Func called");
    const temp = {
      message: e,
    };
    const response = await fetch("http://localhost:8000/v1/sendNotification", {
      method: "POST",
      body: JSON.stringify(temp),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      console.log(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  };

  // setTimeout(() => {
  //   setStatus(true);
  // }, 10000);

  useEffect(() => {
    if (!status) return;

    sendNotification(alert_message);
  }, [status]);

  return loader ? (
    <PreLoader />
  ) : (
    <div className="">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/login"
          element={
            <Login handleSubmit={handleSubmit} isloggedin={isloggedin} />
          }
        />
        <Route
          path="/police"
          element={<Police messages={messages} status={status} />}
        />
        <Route path="/traffic" element={<Traffic />} />
      </Routes>
    </div>
  );
}

export default App;
