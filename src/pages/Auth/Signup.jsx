import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signup } from "../../utilities/makeApiRequest";
import { useMutation } from "@tanstack/react-query";
import { useAuthContext } from "../../contexts/AuthContext";


const Signup = () => {
  const navigate = useNavigate();
    const { setAuthUser } = useAuthContext();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });
  const [error] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    console.log("Form Data:", formData);
    mutation.mutate(formData); // Send the credentials
  };

  const mutation = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      console.log("Login successful:", data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      setAuthUser(data.user);
      navigate("/");
    },
    onError: (error) => {
      // Handle error (e.g., show error message)
      console.error("Login failed:", error);
    },
  });

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-center text-2xl font-bold text-gray-900">
          Create your account
        </h2>
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-amber-600 hover:text-amber-500"
          >
            Sign in
          </Link>
        </p>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="name" className="sr-only">
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="appearance-none rounded-lg block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
              placeholder="Full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="appearance-none rounded-lg block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="appearance-none rounded-lg block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
              placeholder="Password"
            />
          </div>
          <div>
            <label htmlFor="role" className="sr-only">
              Role
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="appearance-none rounded-lg block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
            >
              <option value="customer">Customer</option>
              <option value="artisan">Artisan</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
