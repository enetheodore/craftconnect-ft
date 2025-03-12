const BASE_URL = "http://localhost:3000"; // Base URL for the API

// This helper function provides a type-safe and reusable API request function
export const apiRequest = async <T>( // T will be the expected response type
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET", // HTTP method
  body?: object, 
): Promise<T> => {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method,
      headers: { "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : undefined,
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    return data; 
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Unexpected error");
  }
};

