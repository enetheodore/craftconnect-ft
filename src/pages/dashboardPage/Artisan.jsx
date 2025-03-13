import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiRequest } from "../../utils/apiUtils";

const CreateProduct = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    categoryId: "",
    images: [],
    inventoryCount: "",
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData({ ...formData, images: [file] });

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      setError("Unauthorized: Please log in.");
      return;
    }

    const parsedUser = JSON.parse(storedUser);
    if (!parsedUser || parsedUser.role !== "artisan") {
      setError("Unauthorized: You must be an artisan to create products.");
      return;
    }

    const artisanId = parsedUser.id;

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title.trim());
      formDataToSend.append("description", formData.description.trim());
      formDataToSend.append("price", formData.price.toString());
      formDataToSend.append("categoryId", formData.categoryId);
      formDataToSend.append("inventoryCount", formData.inventoryCount.toString());
      formDataToSend.append("artisanId", artisanId);

      if (formData.images.length > 0) {
        formDataToSend.append("image", formData.images[0]);
      }

      console.log("Submitting form:", Object.fromEntries(formDataToSend.entries()));

      await apiRequest("/product", "POST", formDataToSend, true);
      navigate("/artisan/dashboard");
    } catch (error) {
      console.error("API Request Error:", error);
      setError("Failed to create product. Please check input fields.");
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 p-8">
      <h1 className="text-3xl font-bold text-gray-900">Create Product</h1>
      <p className="text-gray-600 mt-2">Fill in the details to create your product</p>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="text-gray-700">
              Product Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md"
              placeholder="Product Title"
            />
          </div>

          <div>
            <label htmlFor="description" className="text-gray-700">
              Product Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md"
              rows={3}
              placeholder="Product Description"
            />
          </div>

          <div>
            <label htmlFor="price" className="text-gray-700">
              Price
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md"
              placeholder="Price"
            />
          </div>

          <div>
            <label htmlFor="categoryId" className="text-gray-700">
              Category ID
            </label>
            <input
              type="text"
              name="categoryId"
              value={formData.categoryId}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md"
              placeholder="Category ID"
            />
          </div>

          <div>
            <label htmlFor="inventoryCount" className="text-gray-700">
              Inventory Count
            </label>
            <input
              type="number"
              name="inventoryCount"
              value={formData.inventoryCount}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md"
              placeholder="Inventory Count"
            />
          </div>

          <div>
            <label htmlFor="image" className="text-gray-700">
              Product Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-3 border rounded-md"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-40 object-cover rounded-md mt-4"
              />
            )}
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-amber-600 text-white py-3 rounded-md hover:bg-amber-700"
            >
              Create Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
