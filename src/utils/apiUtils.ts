import axios, { AxiosError, AxiosResponse } from "axios";

const BASE_URL = "http://localhost:3000"; 

// This helper function provides a type-safe and reusable API request function
export const apiRequest = async <T>( 
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  body?: object, 
): Promise<AxiosResponse<T>> => {
  try {
    const res = await axios.request<T>({
      url: `${BASE_URL}${endpoint}`,
      method,
      data: body,
    });

    if (!res.data) {
      throw new Error("No data returned from API");
    }

    return res;
  } catch (error) {
    const err = error as AxiosError;
    const errorMessage = (err.response?.data && typeof err.response.data === 'object' && 'message' in err.response.data) 
      ? (err.response.data as { message: string }).message 
      : "Something went wrong";
    throw new Error(errorMessage);
  }
};
