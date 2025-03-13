import axios from "axios";

const BASE_URL = "http://localhost:3000";

// Generic API request function with file upload support
export const apiRequest = async (
  endpoint,
  method = "GET",
  body, // Allow FormData for file uploads
  isFormData = false, // Flag to check if request is FormData
) => {
  try {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
    };

    if (!isFormData) {
      headers["Content-Type"] = "application/json";
    }

    const res = await axios.request({
      url: `${BASE_URL}${endpoint}`,
      method,
      data: body,
      headers,
    });

    if (!res.data) {
      throw new Error("No data returned from API");
    }

    return res;
  } catch (error) {
    console.error("API Request Error:", error);

    const errorMessage =
      error.response?.data &&
      typeof error.response.data === "object" &&
      "message" in error.response.data
        ? error.response.data.message
        : "Something went wrong";

    throw new Error(errorMessage);
  }
};

export default apiRequest;
