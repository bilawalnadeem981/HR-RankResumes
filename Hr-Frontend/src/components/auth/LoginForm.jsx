import React from "react";
import { Link } from "react-router-dom";
import { useLoginForm } from "../../hooks/auth/useLoginForm";

const LoginForm = () => {
  const { formData, errors, handleChange, handleSubmit, loading, apiError } = useLoginForm();

  return (
    <div className="form-card">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Login</h2>
      <p className="text-gray-500 text-sm mb-6">
        Welcome back! Please login to your account
      </p>

      {apiError && (
        <div className="bg-red-50 text-red-500 p-3 rounded-lg mb-4 text-sm border border-red-100">
          {apiError}
        </div>
      )}

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

        <button 
          type="submit" 
          className="btn-primary flex items-center justify-center"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Logging in...
            </span>
          ) : "Login"}
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