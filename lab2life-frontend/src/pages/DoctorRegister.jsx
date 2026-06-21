import React, { useState } from "react";
import API from "../api/labApi";
import { useNavigate } from "react-router-dom";

export default function DoctorRegister() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: "",
    specialization: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await API.post("/doctor-register", formData);

      alert("Doctor registered successfully");

      navigate("/doctor-login");
    } catch (error) {
      alert(
        error.response?.data?.detail ||
        "Registration failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#0f1117]">
      <div className="bg-[#1c1f27] p-8 rounded-2xl w-full max-w-md shadow-lg">
        <h1 className="text-3xl font-bold text-center text-orange-400 mb-6">
          Doctor Register
        </h1>

        <form onSubmit={handleRegister} className="space-y-5">

          <input
            type="text"
            name="full_name"
            placeholder="Doctor Name"
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-[#111827] border border-gray-700 text-white"
          />

          <input
            type="text"
            name="specialization"
            placeholder="Specialization"
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-[#111827] border border-gray-700 text-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-[#111827] border border-gray-700 text-white"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-[#111827] border border-gray-700 text-white"
          />

          <button
            type="submit"
            className="w-full bg-orange-500 py-3 rounded-lg"
          >
            Register
          </button>

        </form>
      </div>
    </div>
  );
}