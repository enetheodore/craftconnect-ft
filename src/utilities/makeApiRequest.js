import axios from "axios";
import { useAuthContext } from "../contexts/AuthContext";

const uploadImageApiRequest = async (
  endpoint,
  data = {},
  method = "GET",
  sessionToken = ""
) => {
  const headers = {
    "X-Parse-Application-Id": import.meta.env.VITE_APP_NAME,
    "X-Parse-REST-API-Key": import.meta.env.VITE_APP_ID,
    "X-Parse-Session-Token": sessionToken,
    "Content-Type": "application/octet-stream", // Set content type
  };
  const url = `${import.meta.env.VITE_API_URL}${endpoint}`;
  console.log(url);
  const options = {
    url: url,
    method,
    headers,
    data,
  };
  console.log(data);
  try {
    const response = await axios.post(url, data, { headers });
    return response;
  } catch (error) {
    // Handle error as needed
    console.error("Error during Axios request:", error);
    throw error;
  }
};
const makeApiRequest = async (
  endpoint,
  data = {},
  method = "GET",
  sessionToken = ""
) => {
  let credentials = JSON.parse(localStorage.getItem("user"));

  const headers = {

    "Authorization": sessionToken,
  };
  const url = `${import.meta.env.VITE_API_URL}${endpoint}`;

  console.log(url);
  const options = {
    url: url,
    method,
    headers,
    data,
  };

  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    // Handle error as needed
    console.error("Error during Axios request:", error);
    throw error;
  }
  // const response = await axios(options);
  // return response.data;
};
export { makeApiRequest, uploadImageApiRequest };

export const loginAdmin = async (data) => {
  const authUser = await makeApiRequest("/login/login", data, "POST", "");
  console.log(authUser); // Adjust the endpoint as needed
  return authUser;
};

export const getProductList = async () => {
  const products = await makeApiRequest("/product", {}, "GET", "");
  console.log(products); // Adjust the endpoint as needed
  return products;
};
export const getCatagoryList = async () => {
  const products = await makeApiRequest("/category", {}, "GET", "");
  console.log(products); // Adjust the endpoint as needed
  return products;
};



export const createCatagory = async (data) => {
  const products = await makeApiRequest("/category/create", data, "POST", "");
  console.log(products); // Adjust the endpoint as needed
  return products;
};
export const createProduct = async (data) => {
  const products = await makeApiRequest("/product/create", data, "POST", "");
  console.log(products); // Adjust the endpoint as needed
  return products;
};