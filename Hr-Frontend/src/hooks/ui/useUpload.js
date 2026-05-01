import { useState } from "react";
import { apiCall } from "../../services/api";

export const useUpload = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileChange = (event) => {
    const selected = event.target.files[0];
    
    // Reset states when file changes
    setError(null);
    setResult(null);

    if (selected) {
      if (selected.type !== "application/pdf") {
        setError("Only PDF files are allowed");
        setFile(null);
        return;
      }
      setFile(selected);
    } else {
      setFile(null);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file first");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append("resume", file);

      const response = await apiCall("/resume/upload", {
        method: "POST",
        body: formData,
      });

      setResult(response);
      setFile(null); // Clear file after successful upload
      return response;
    } catch (err) {
      setError(err.message || "Failed to upload resume");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setFile(null);
    setLoading(false);
    setError(null);
    setResult(null);
  };

  return {
    file,
    loading,
    error,
    result,
    handleFileChange,
    handleUpload,
    reset,
  };
};
