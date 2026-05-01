import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiCall } from "../../services/api";
import { useAuth } from "../../context/AuthContext";


export const useLoginForm = () => {
  const navigate = useNavigate();
  const { login: authLogin } = useAuth();
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

  const handleChange = (event) => {
    let { name, value } = event.target;

    if (name === "email") {
      value = value.replace(/[^a-zA-Z0-9@._-]/g, "");
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setApiError("");

    const emailError = validateField("email", formData.email);
    const passwordError = validateField("password", formData.password);
    setErrors({ email: emailError, password: passwordError });

    if (emailError || passwordError) return;

    setLoading(true);
    try {
      const data = await apiCall("/auth/login", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      authLogin({ 
        id: data.id, 
        fullName: data.fullName, 
        email: data.email,
        role: data.role 
      }, data.token);
      
      console.log("Login Success:", data);
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
    handleChange,
    handleSubmit,
  };
};
