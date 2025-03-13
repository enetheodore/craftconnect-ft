import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getProductList } from "../../utilities/makeApiRequest";
import { Box } from "@mui/material";
import InputComp from "../ui/InputComp";
import { TabelComp2 } from "../ui/TabelComp2";
import { Star } from "lucide-react";
import { useCart } from "../../context/CartContext";

const columns = [
    { id: "number", label: "Number", minWidth: 20, align: "left" },
    { id: "image", label: "Image", minWidth: 20, align: "left" },

    { id: "title", label: "Product Name", minWidth: 120, align: "left" },
    { id: "description", label: "Description", minWidth: 120, align: "left" },
    { id: "date", label: "Date created", minWidth: 120, align: "left" },
  ];
const ExploreProducts = () => {
  // title: "",
  // description: "",
  // price: 0,
  // artisanId: authUser._id,
  // images: "",
  // inventoryCount: 0,

  const {
    cart,
    addItem,
    removeItem,
    updateItemQuantity,
    clearCart,
    getTotalPrice,
  } = useCart();

  const [products, setProducts] = React.useState();
  const [currentProduct, setCurrentProduct] = React.useState();

  const [openEditProduct, setOpenEditProduct] = useState(false);

  const [firstName, setFirstName] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [totalPages, setTotalPages] = React.useState(0);
  const [totalProducts, setTotalProducts] = React.useState(0);
  const [isActive, setIsActive] = useState(true);

  const [isCompanyProduct, setIsCompanyProduct] = useState(true);
  const { data, error, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: getProductList,
    refetchInterval: 10000,
  });

  useEffect(() => {
    // setTotalPages(totalPages);
    console.log(data?.totalItems)
    if (data) {
      const editedProduct = data.products.map((product, index) => ({
        ...product,
        number: page + index + 1,
        image: (
          <div onClick={() => handleClick(product._id)}>
           <img src={`${import.meta.env.VITE_API_URL}/file/${product.images[0]}`} alt=""  className="w-[60px] h-[60px] rounded-full"/>
          </div>
        ),
        title: (
          <div onClick={() => handleClick(product._id)}>
            {product.title}
          </div>
        ),
        description: (
          <div onClick={() => handleEditClick()}>{product.description}</div>
        ),
        price: (
          <div onClick={() => handleEditClick()}>{product.price}</div>
        ),
        inventoryCount: (
          <div onClick={() => handleEditClick()}>{product.inventoryCount}</div>
        ),
        date: (
          <div onClick={() => handleClick(product.objectId)}>
            {product.createdAt}
          </div>
        ),
       
      }));
      setProducts(editedProduct);
      setTotalProducts(data?.totalItems);
      setTotalPages(data?.totalPages);
    }
  }, [data]);
  return (
    <>
      {products && (
        <Box>
          <section className="max-w-7xl mx-auto py-16 px-6">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
              Explore Artisan Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data && (
                <>
                  {data.products.map((product) => (
                    <div
                      key={product._id}
                      className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                      <img
                        src={`${import.meta.env.VITE_API_URL}/file/${
                          product.images[0]
                        }`}
                        alt={product.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {product.title}
                        </h3>
                        <p className="text-amber-600 font-medium mt-1">
                          {product.description}
                        </p>
                        <div className="flex items-center mt-2">
                          <Star className="h-5 w-5 text-amber-400" />
                          <span className="ml-1 text-sm text-gray-500">
                            {product.price}
                          </span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-sm text-gray-500">
                            {product.inventoryCount}
                          </span>
                        </div>
                        <button
                          className="mt-4 w-full bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700 transition"
                          onClick={() => {
                            console.log(product);
                            addItem(product);
                          }}
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </section>
        </Box>
      )}
    </>
  );
};

export default ExploreProducts;
