import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getProductList } from "../../utilities/makeApiRequest";
import { Box } from "@mui/material";
import InputComp from "../ui/InputComp";
import { TabelComp2 } from "../ui/TabelComp2";
const columns = [
    { id: "number", label: "Number", minWidth: 20, align: "left" },
    { id: "image", label: "Image", minWidth: 20, align: "left" },

    { id: "title", label: "Product Name", minWidth: 120, align: "left" },
    { id: "description", label: "Description", minWidth: 120, align: "left" },
    { id: "date", label: "Date created", minWidth: 120, align: "left" },
  ];
const ListOfProducts = () => {
  // title: "",
  // description: "",
  // price: 0,
  // artisanId: authUser._id,
  // images: "",
  // inventoryCount: 0,

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
  return <>
{
    products &&(
        <Box>
          <Box sx={{ display: { lg: "flex" }, gap: "20px" }}>
          
            <InputComp
              type="text"
              name="phone"
              label="Phone Number"
            //   value={phone}
            //   onChange={(name, value) => setPhone(value)}
              placeholder="Enter Phone Number"
              sx={{ paddingBottom: "10px" }}
            />
            <InputComp
              type="text"
              name="firstName"
              label="First Name"
            //   value={firstName}
            //   onChange={(name, value) => setProducts(value)}
              placeholder="Enter Password"
              sx={{ paddingBottom: "10px" }}
            />
          </Box>
          <TabelComp2
            rows={products}
            columns={columns}
            page={page}
            setPage={setPage}
            rowsPerPage={rowsPerPage}
            totalPages={totalProducts}
            path=""
          />
    
        </Box>
    )
}
  </>;
};

export default ListOfProducts;
