import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Home from "../pages/Home";
import UploadReport from "../pages/UploadReport";
import ReportSummary from "../pages/ReportSummary";
import AskDoctor from "../pages/AskDoctor";
import Doctors from "../pages/Doctors";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DoctorList from "../pages/DoctorList";
import MyReports from "../pages/MyReports";

// ✅ Doctor Pages
import DoctorLogin from "../pages/DoctorLogin";
import DoctorRegister from "../pages/DoctorRegister";
import DoctorDashboard from "../pages/DoctorDashboard";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#0f1115] text-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        {/* Upload Report */}
        <Route
          path="/upload"
          element={
            <Layout>
              <UploadReport />
            </Layout>
          }
        />

        {/* Report Summary */}
        <Route
          path="/summary"
          element={
            <Layout>
              <ReportSummary />
            </Layout>
          }
        />

        {/* Ask Doctor */}
        <Route
          path="/ask-doctor"
          element={
            <Layout>
              <AskDoctor />
            </Layout>
          }
        />

        {/* Doctors */}
        <Route
          path="/doctors"
          element={
            <Layout>
              <Doctors />
            </Layout>
          }
        />

        {/* Doctor Category List */}
        <Route
          path="/doctors/:type"
          element={
            <Layout>
              <DoctorList />
            </Layout>
          }
        />

        {/* Patient Login */}
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />

        {/* Patient Register */}
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />

        {/* My Reports */}
        <Route
          path="/my-reports"
          element={
            <Layout>
              <MyReports />
            </Layout>
          }
        />

        {/* Doctor Login */}
        <Route
          path="/doctor-login"
          element={
            <Layout>
              <DoctorLogin />
            </Layout>
          }
        />

        {/* Doctor Register */}
        <Route
          path="/doctor-register"
          element={
            <Layout>
              <DoctorRegister />
            </Layout>
          }
        />

        {/* Doctor Dashboard */}
        <Route
          path="/doctor-dashboard"
          element={
            <Layout>
              <DoctorDashboard />
            </Layout>
          }
        />

        {/* 404 */}
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}