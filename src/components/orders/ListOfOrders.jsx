import React, { useEffect, useState } from "react";
import { getOrderList } from "../../utilities/makeApiRequest";
import { Box } from "@mui/material";
import InputComp from "../ui/InputComp";
import { TabelComp2 } from "../ui/TabelComp2";
import { useAuthContext } from "../../contexts/AuthContext";
import { useQuery } from "@tanstack/react-query";

// _id
// 67d4e8ec497d2fec54a2a09a
// customerId
// 67d20646d9542a7bea18039b

// products
// Array (1)

// 0
// Object
// categoryId
// 67d2739377155f0aaf4044ab
// artisanId
// 67d20646d9542a7bea18039b
// productId
// 67d3c50de17f386992861901
// quantity
// 2
// price
// 450
// _id
// 67d3c50de17f386992861901
// totalAmount
// 900
// orderStatus
// "ordered"
// createdAt
// 2025-03-15T02:41:48.638+00:00
// updatedAt
// 2025-03-15T02:41:48.638+00:00
// __v
// 0
const columns = [
  { id: "number", label: "Number", minWidth: 20, align: "left" },
  { id: "orderId", label: "orderId", minWidth: 20, align: "left" },
  { id: "totalPrice", label: "Total Price", minWidth: 120, align: "left" },

  { id: "orderStatus", label: "Order Status", minWidth: 120, align: "left" },
  { id: "date", label: "Date created", minWidth: 120, align: "left" },
];
const ListOfOrders = () => {
  // title: "",
  // description: "",
  // price: 0,
  // artisanId: authUser._id,
  // images: "",
  // inventoryCount: 0,

  const [orders, setOrders] = React.useState();
  const [currentOrder, setCurrentOrder] = React.useState();

  const [openEditOrder, setOpenEditOrder] = useState(false);

  const [firstName, setFirstName] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [totalPages, setTotalPages] = React.useState(0);
  const [totalOrders, setTotalOrders] = React.useState(0);
  const [isActive, setIsActive] = useState(true);

  const [isCompanyOrder, setIsCompanyOrder] = useState(true);
  const { authUser } = useAuthContext();

  const { data, error, isLoading } = useQuery({
    queryKey: ["order"],
    queryFn: () => getOrderList(authUser._id),
    refetchInterval: 10000,
  });

  useEffect(() => {
    // setTotalPages(totalPages);
    console.log("data", data);
    if (data) {
      const editedOrder = data.orders.map((order, index) => ({
        ...order,
        number: page + index + 1,
        orderId: (
          <div onClick={() => handleClick(order._id)}>
            <p>{order._id}</p>
            {/* <img src={`${import.meta.env.VITE_API_URL}/file/${order.images[0]}`} alt=""  className="w-[60px] h-[60px] rounded-full"/> */}
          </div>
        ),
        totalPrice: (
          <div onClick={() => handleClick(order._id)}>{order.totalAmount}</div>
        ),
        orderStatus: (
          <div onClick={() => handleEditClick()}>{order.orderStatus}</div>
        ),

        date: (
          <div onClick={() => handleClick(order.objectId)}>
            {order.createdAt}
          </div>
        ),
      }));
      setOrders(editedOrder);
      setTotalOrders(data?.totalItems);
      setTotalPages(data?.totalPages);
    }
  }, [data]);
  return (
    <>
      <h1>Orders</h1>
      {orders && (
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
              //   onChange={(name, value) => setOrders(value)}
              placeholder="Enter Password"
              sx={{ paddingBottom: "10px" }}
            />
          </Box>
          <TabelComp2
            rows={orders}
            columns={columns}
            page={page}
            setPage={setPage}
            rowsPerPage={rowsPerPage}
            totalPages={totalOrders}
            path=""
          />
        </Box>
      )}
    </>
  );
};

export default ListOfOrders;
