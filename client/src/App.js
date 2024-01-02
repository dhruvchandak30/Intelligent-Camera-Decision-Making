// app.js
import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000"); // Update the WebSocket connection URL

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    // Event listener for the "scissors_detected" event
    socket.on("scissors_detected", (payload) => {
      setData(payload);
      alert("Scissors Detected!"); // Show an alert when scissors are detected
    });

    return () => {
      socket.off("scissors_detected"); // Clean up the event listener on component unmount
    };
  }, []);

  return (
    <div>
      {typeof data.members === "undefined" ? (
        <p>Checking for any Sharp Objects</p>
      ) : (
        data.members.map((member, i) => <p key={i}>{member}</p>)
      )}
    </div>
  );
};

export default App;
