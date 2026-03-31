import React, { useState } from 'react';
import { handleFormChange } from '../../utils/common/helper';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        handleFormChange(e, setFormData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="form-card transform transition-all duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Signup</h2>
            <p className="text-gray-500 text-sm mb-6">Join HR RankResumes - AI-powered screening</p>

            <form onSubmit={handleSubmit} className="space-y-5">
                {['fullName', 'email', 'password', 'confirmPassword'].map(field => (
                    <div key={field}>
                        <label className="form-label" htmlFor={field}>
                            {field === 'fullName' ? 'Full Name' :
                                field === 'confirmPassword' ? 'Confirm Password' :
                                    field.charAt(0).toUpperCase() + field.slice(1)}
                        </label>
                        <input
                            type={field.includes('password') ? 'password' : field === 'email' ? 'email' : 'text'}
                            id={field}
                            name={field}
                            value={formData[field]}
                            onChange={handleChange}
                            placeholder={`Enter your ${field === 'fullName' ? 'full name' : field}`}
                            className="form-input transition-all"
                            required
                        />
                    </div>
                ))}
                <button
                    type="submit"
                    className="btn-primary-lg"
                >
                    Sign Up
                </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
                Already have an account? <a href="/login" className="text-indigo-600 hover:text-indigo-700 font-semibold">Login here</a>
            </p>
        </div>
    );
};

export default SignupForm;