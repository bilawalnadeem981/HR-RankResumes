const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const apiCall = async (endpoint, options = {}) => {
  const url = `${BASE_URL}${endpoint}`;
  
  const isFormData = options.body instanceof FormData;
  
  const headers = {
    ...(isFormData ? {} : { "Content-Type": "application/json" }),
    ...options.headers,
  };

  const token = localStorage.getItem("token");
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const config = {
    ...options,
    headers,
  };

  try {
    const response = await fetch(url, config);
    
    // Check if response is JSON
    const contentType = response.headers.get("content-type");
    let data;
    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    } else {
      data = { message: await response.text() };
    }

    if (!response.ok) {
      throw new Error(data.message || data.error || "Something went wrong");
    }

    return data;
  } catch (error) {
    throw error;
  }
};
