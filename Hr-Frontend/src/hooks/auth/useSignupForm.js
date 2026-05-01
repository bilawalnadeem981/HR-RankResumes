import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiCall } from "../../services/api";
import { useAuth } from "../../context/AuthContext";

export const useSignupForm = () => {
    const navigate = useNavigate();
    const { login: authLogin } = useAuth();
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

    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState("");

    const validateField = (name, value, currentPassword) => {
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
            else if (value !== currentPassword) error = 'Passwords do not match';
        }

        return error;
    };

    const handleChange = (event) => {
        let { name, value } = event.target;

        if (name === 'email') value = value.replace(/[^a-zA-Z0-9@._-]/g, "");

        setFormData((prev) => {
            const updated = { ...prev, [name]: value };
            
            const error = validateField(name, value, updated.password);
            setErrors((errPrev) => ({ ...errPrev, [name]: error }));

            if (name === 'password' && updated.confirmPassword) {
                const confirmError = validateField('confirmPassword', updated.confirmPassword, value);
                setErrors((errPrev) => ({ ...errPrev, confirmPassword: confirmError }));
            }
            
            return updated;
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setApiError("");

        const fullNameError = validateField('fullName', formData.fullName);
        const emailError = validateField('email', formData.email);
        const passwordError = validateField('password', formData.password);
        const confirmPasswordError = validateField('confirmPassword', formData.confirmPassword, formData.password);

        setErrors({
            fullName: fullNameError,
            email: emailError,
            password: passwordError,
            confirmPassword: confirmPasswordError
        });

        if (fullNameError || emailError || passwordError || confirmPasswordError) return;

        setLoading(true);
        try {
            const { confirmPassword, ...signupData } = formData;
            const data = await apiCall("/auth/signup", {
                method: "POST",
                body: JSON.stringify(signupData),
            });

            authLogin({ 
                id: data.id, 
                fullName: data.fullName, 
                email: data.email,
                role: data.role 
            }, data.token);
            
            console.log('Signup Success:', data);
            navigate("/dashboard");
        } catch (error) {
            setApiError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return {
        formData,
        errors,
        loading,
        apiError,
        handleChange,
        handleSubmit
    };
};

