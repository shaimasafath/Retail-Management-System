// frontend/src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage.jsx";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<DashboardPage />} />
  </Routes>
);

export default AppRoutes;
