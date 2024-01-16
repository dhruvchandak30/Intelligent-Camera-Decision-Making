import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Police from "./pages/Police";
import Traffic from "./components/Traffic/Traffic";
import io from "socket.io-client";
import PreLoader from "./components/preLoader/PreLoader";

const socket = io.connect("http://localhost:8000");

function App() {
  const [loader, setLoader] = useState(true);
  const [isloggedin, setLoggedin] = useState(false);
  const [detect, setDetect] = useState({
    img: "",
    title: "",
  });

  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const [input, setInput] = useState("");

  const responseHandler = () => {
    if (input === "YES") {
    } else {
    }
  };

  const aproveHandler = (e) => {
    setInput(e);
  };

  useEffect(() => {
    responseHandler();
  }, [input]);

  const nav = useNavigate();

  useEffect(() => {
    // nav("/");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const name=e.target.name.value;
    // const password=e.target.password.value;
    // setUser({ name , password});
    setLoggedin(true);
    // e.target.name.value = "";
    // e.target.password.value = "";
  };
  console.log(user);

  useEffect(() => {
    socket.on("Data", (data) => {
      setDetect({ img: data.img, title: data.title });
    });
  }, [socket]);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  console.log(detect);

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
