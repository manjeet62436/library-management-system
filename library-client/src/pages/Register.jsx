import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      
        console.log("Form Data:", formData);
    try {
      const res = await axios.post(
       "http://127.0.0.1:5000/api/users/register",
        formData
      );

      alert(res.data.message);
    } catch (error) {
  console.log("FULL ERROR:", error);
  console.log("RESPONSE:", error.response);
  alert(error.message);
}
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-6">
            Register
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;