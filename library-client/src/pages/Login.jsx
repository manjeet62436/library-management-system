import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

function Login() {
  const navigate = useNavigate();

  

  const [formData, setFormData] = useState({
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

    try {
     const res = await axios.post(
  "https://library-management-system-cgho.onrender.com/api/users/login",
  formData
);

      localStorage.setItem("token", res.data.token);
     
      localStorage.setItem(
  "user",
  JSON.stringify(res.data.user)
);

      alert("Login Successful");

      navigate("/dashboard");
    } catch (error) {
  console.log(error);
  console.log(error.response?.data);

  alert(
    error.response?.data?.message || error.message
  );
}
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-6">
            Login
          </h2>

          <form
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg outline-none"
            />

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg outline-none"
            />

            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 rounded-lg"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;