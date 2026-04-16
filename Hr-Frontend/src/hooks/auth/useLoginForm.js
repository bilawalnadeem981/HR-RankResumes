import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLoginForm = () => {
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

  const handleChange = (event) => {
    let { name, value } = event.target;

    if (name === "email") {
      value = value.replace(/[^a-zA-Z0-9@._-]/g, "");
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();


    const emailError = validateField("email", formData.email);
    const passwordError = validateField("password", formData.password);
    setErrors({ email: emailError, password: passwordError });

    if (emailError || passwordError) return;

    console.log("Login Data:", formData);
    navigate("/dashboard");
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
};
