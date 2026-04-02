import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleFormChange } from "../../utils/common/helper";

const LoginForm = () => {
  const navigate = useNavigate(); // 🔥 add this

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    handleFormChange(e, setFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);

    // 🔥 yahan future me API login hoga

    // ✅ TEMP redirect (test ke liye)
    navigate("/dashboard");
  };

  return (
    <div className="form-card">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Login</h2>
      <p className="text-gray-500 text-sm mb-6">
        Welcome back! Please login to your account
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="form-input"
            required
          />
        </div>

        <div>
          <label className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="form-input"
            required
          />
        </div>

        <button
          type="submit"
          className="btn-primary"
        >
          Login
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Don’t have an account?{" "}
        <Link
          to="/signup"
          className="text-indigo-600 font-semibold hover:text-indigo-700"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;