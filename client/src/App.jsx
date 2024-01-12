import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import {useNavigate} from "react-router-dom"
import { useEffect } from "react";



function App() {
  const nav=useNavigate()

  useEffect(()=>{
    nav("/login")
  },[])

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
