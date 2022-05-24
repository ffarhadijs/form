import React from "react";
import SignUp from "./components/signUp/SignUp";
import { BrowserRouter, Routes,Route, Navigate } from "react-router-dom";
import Login from "./components/login/Login";
import "./App.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to='/signup'/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
