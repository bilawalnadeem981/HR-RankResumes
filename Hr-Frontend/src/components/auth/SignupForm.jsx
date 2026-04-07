import React, { useState } from 'react';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const validateField = (name, value) => {
        let error = '';

        if (name === 'fullName') {
            if (!value) error = 'Full name is required';
        }

        if (name === 'email') {
            if (!value) error = 'Email is required';
            else if (!value.includes('@')) error = 'Email must include @';
            else if (!value.includes('.')) error = 'Email must include domain (e.g., .com)';
            else if (!/\S+@\S+\.\S+/.test(value)) error = 'Email format is invalid';
        }

        if (name === 'password') {
            if (!value) error = 'Password is required';
            else if (value.length < 6) error = 'Password must be at least 6 characters';
            else if (value.length > 20) error = 'Password cannot exceed 20 characters';
            else if (!/[!@#$%^&*]/.test(value))
                error = 'Password must include at least 1 special character (!@#$%^&*)';
        }

        if (name === 'confirmPassword') {
            if (!value) error = 'Please confirm your password';
            else if (value !== formData.password) error = 'Passwords do not match';
        }

        return error;
    };

    const handleChange = (e) => {
        let { name, value } = e.target;

        if (name === 'email') value = value.replace(/[^a-zA-Z0-9@._-]/g, "");

        setFormData({ ...formData, [name]: value });

        const error = validateField(name, value);
        setErrors({ ...errors, [name]: error });

        if (name === 'password' && formData.confirmPassword) {
            const confirmError = validateField('confirmPassword', formData.confirmPassword);
            setErrors((prev) => ({ ...prev, confirmPassword: confirmError }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const fullNameError = validateField('fullName', formData.fullName);
        const emailError = validateField('email', formData.email);
        const passwordError = validateField('password', formData.password);
        const confirmPasswordError = validateField('confirmPassword', formData.confirmPassword);

        setErrors({
            fullName: fullNameError,
            email: emailError,
            password: passwordError,
            confirmPassword: confirmPasswordError
        });

        if (fullNameError || emailError || passwordError || confirmPasswordError) return;

        console.log('Form submitted:', formData);
    };

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
                Already have an account? <a href="/login" className="text-indigo-600 hover:text-indigo-700 font-semibold">Login here</a>
            </p>
        </div>
    );
};

export default SignupForm;