import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "../login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../components/home/Home";
import Explore from "../../components/home/Explore";

const HomePage = () => {

  return (
    <div className=" ">
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Login />} />
          <Route path="/explore" element={<Explore />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default HomePage;
