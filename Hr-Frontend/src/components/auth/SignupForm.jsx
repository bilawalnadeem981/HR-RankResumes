import React from 'react';
import { Link } from 'react-router-dom';
import { useSignupForm } from '../../hooks/auth/useSignupForm';

const SignupForm = () => {
    const { formData, errors, handleChange, handleSubmit } = useSignupForm();

    return (
        <div className="form-card transform transition-all duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Signup</h2>
            <p className="text-gray-500 text-sm mb-6">Join HR RankResumes - AI-powered screening</p>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="form-label" htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className={`form-input ${errors.fullName ? "border-red-500" : ""}`}
                        required
                    />
                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                </div>

                <div>
                    <label className="form-label" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className={`form-input ${errors.email ? "border-red-500" : ""}`}
                        required
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                    <label className="form-label" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        className={`form-input ${errors.password ? "border-red-500" : ""}`}
                        required
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                </div>

                <div>
                    <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm your password"
                        className={`form-input ${errors.confirmPassword ? "border-red-500" : ""}`}
                        required
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                </div>

                <button type="submit" className="btn-primary-lg">Sign Up</button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
                Already have an account?{" "}
                <Link to="/login" className="text-indigo-600 hover:text-indigo-700 font-semibold">
                    Login here
                </Link>
            </p>
        </div>
    );
};

export default SignupForm;