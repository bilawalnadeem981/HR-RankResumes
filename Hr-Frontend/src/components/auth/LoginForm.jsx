import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

   const validateField = (name, value) => {
    let error = "";

    if (name === "email") {
      if (!value) {
        error = "Email is required";
      } else if (!value.includes("@")) {
        error = "Email must include @";
      } else if (!value.includes(".")) {
        error = "Email must include domain (e.g., .com)";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        error = "Email format is invalid";
      }
    }

    if (name === "password") {
      if (!value) error = "Password is required";
      else if (value.length < 6)
        error = "Password must be at least 6 characters";
      else if (value.length > 20)
        error = "Password cannot exceed 20 characters";
      else if (!/[!@#$%^&*]/.test(value))
        error = "Password must include at least 1 special character (!@#$%^&*)";
    }

    return error;
  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "email") {
      value = value.replace(/[^a-zA-Z0-9@._-]/g, "");
    }

    setFormData({ ...formData, [name]: value });

    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailError = validateField("email", formData.email);
    const passwordError = validateField("password", formData.password);
    setErrors({ email: emailError, password: passwordError });

    if (emailError || passwordError) return;

    console.log("Login Data:", formData);
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
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={`form-input ${errors.email ? "border-red-500" : ""}`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className={`form-input ${errors.password ? "border-red-500" : ""}`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <button type="submit" className="btn-primary">
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