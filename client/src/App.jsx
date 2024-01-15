import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Police from "./pages/Police";
import Traffic from "./components/Traffic/Traffic";

function App() {
  const [isloggedin, setLoggedin] = useState(false);
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
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login handleSubmit={handleSubmit}/>} />
        <Route path="/police" element={<Police />} />
        <Route path="/traffic" element={<Traffic />} />
      </Routes>
    </div>
  );
}

export default App;
