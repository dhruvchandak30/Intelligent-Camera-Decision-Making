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
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const responseHandler = () => {
    if (input === "YES") {
      // Handle positive response
    } else {
      // Handle negative response
    }
  };

  const aproveHandler = (e) => {
    setInput(e);
  };

  useEffect(() => {
    responseHandler();
  }, [input]);

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

    // Listen for the "messageFromServer" event from the server
    socket.on("messageFromServer", (message, image_url) => {
      console.log(message, image_url);
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

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
        <Route path="/police" element={<Police />} />
        <Route path="/traffic" element={<Traffic />} />
      </Routes>

    </div>
  );
}

export default App;
