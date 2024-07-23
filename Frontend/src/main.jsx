import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage.jsx";
import RegisterPage from "./Pages/RegisterPage.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
