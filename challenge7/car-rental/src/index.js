import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import './index.css';
import Login from './pages/login';
import FilterCar from './pages/filterCar';
import Register from './pages/register';

const root = document.getElementById("root");
render(
  <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/filter" element={<FilterCar />} />
      </Routes>
  </Router>,
  root
);
