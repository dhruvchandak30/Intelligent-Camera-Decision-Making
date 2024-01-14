import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import {useNavigate} from "react-router-dom"
import { useEffect, useState } from "react";



function App() {
  const [input,setInput]=useState("")

  const responseHandler=()=>{
    if(input==="YES"){
        
    } else {

    }

    
}

const aproveHandler=(e)=>{
  setInput(e);
}

useEffect(()=>{
  responseHandler();
},[input])

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
