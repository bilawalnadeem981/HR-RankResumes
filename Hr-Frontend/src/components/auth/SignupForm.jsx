import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { useSignupForm } from '../../hooks/auth/useSignupForm';

const SignupForm = () => {
    const { formData, errors, handleChange, handleSubmit, loading, apiError } = useSignupForm();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="form-card transform transition-all duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Signup</h2>
            <p className="text-gray-500 text-sm mb-6">Join HR RankResumes - AI-powered screening</p>

            {apiError && (
                <div className="bg-red-50 text-red-500 p-3 rounded-lg mb-4 text-sm border border-red-100">
                    {apiError}
                </div>
            )}

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
                    <div className="relative group">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className={`form-input pr-12 transition-all ${errors.password ? "border-red-500" : "focus:border-indigo-600"}`}
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-600 transition-colors p-1"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                </div>

                <div>
                    <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                    <div className="relative group">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm your password"
                            className={`form-input pr-12 transition-all ${errors.confirmPassword ? "border-red-500" : "focus:border-indigo-600"}`}
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-600 transition-colors p-1"
                        >
                            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                    {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                </div>

                <button 
                    type="submit" 
                    className="btn-primary-lg flex items-center justify-center w-full"
                    disabled={loading}
                >
                    {loading ? (
                        <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Creating account...
                        </span>
                    ) : "Sign Up"}
                </button>
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