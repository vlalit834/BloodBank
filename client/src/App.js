import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin";
import Donor from "./Pages/Donor";
import Patient from "./Pages/Patient";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/donor" element={<Donor />} />
        <Route path="/patient" element={<Patient />} />
      </Routes>
    </>
  );
}

export default App;
