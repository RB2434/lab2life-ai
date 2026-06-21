import React from "react";
import { useNavigate } from "react-router-dom";

export default function Subscription() {
const navigate = useNavigate();

const handleSubscribe = () => {
const token = sessionStorage.getItem("lab2life_token");

if (!token) {
  navigate("/login");
  return;
}

navigate("/doctors");


};

return ( <div className="pt-32 px-4 md:px-10 pb-16"> <div className="max-w-4xl mx-auto text-center"> <h1 className="text-4xl font-bold mb-4">
Connect With Doctors </h1>


    <p className="text-gray-400 mb-12">
      Consult doctors and specialists through Lab2Life.
    </p>

    <div className="bg-[#1c1f27] border border-gray-800 rounded-3xl p-8 shadow-xl">
      <h2 className="text-2xl font-semibold text-orange-400 mb-4">
        Doctor Consultation
      </h2>

      <p className="text-gray-300 mb-6">
        Connect with specialists and get your report reviewed.
      </p>

      <button
        onClick={handleSubscribe}
        className="w-full bg-gradient-to-r from-orange-500 to-red-500 py-3 rounded-xl font-semibold"
      >
        Connect Doctor
      </button>
    </div>
  </div>
</div>

);
}
