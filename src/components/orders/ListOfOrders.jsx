import  { useEffect, useState } from "react";
import { getOrderList } from "../../utilities/makeApiRequest";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import InputComp from "../ui/InputComp";
import { TabelComp2 } from "../ui/TabelComp2";
import { useAuthContext } from "../../contexts/AuthContext";
import { useQuery } from "@tanstack/react-query";

const columns = [
  { id: "number", label: "Number", minWidth: 50, align: "left" },
  { id: "orderId", label: "Order ID", minWidth: 150, align: "left" },
  { id: "totalPrice", label: "Total Price", minWidth: 120, align: "left" },
  { id: "orderStatus", label: "Order Status", minWidth: 120, align: "left" },
  { id: "date", label: "Date Created", minWidth: 150, align: "left" },
];

const ListOfOrders = () => {
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalOrders, setTotalOrders] = useState(0);
  const [showOrders, setShowOrders] = useState(false);
  
  const { authUser } = useAuthContext();

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["order"],
    queryFn: () => getOrderList(authUser._id),
    enabled: false, // Prevents auto-fetching on mount
  });

  useEffect(() => {
    if (data) {
      const formattedOrders = data.orders.map((order, index) => ({
        ...order,
        number: page * rowsPerPage + index + 1,
        orderId: (
          <Typography 
            color="primary" 
            sx={{ cursor: "pointer", textDecoration: "underline" }}
            onClick={() => handleClick(order._id)}
          >
            {order._id}
          </Typography>
        ),
        totalPrice: `\$${order.totalAmount.toFixed(2)}`,
        orderStatus: (
          <Typography
            sx={{
              backgroundColor: order.orderStatus === "Completed" ? "#4caf50" : "#ff9800",
              color: "white",
              padding: "4px 10px",
              borderRadius: "8px",
              textAlign: "center",
              display: "inline-block",
            }}
          >
            {order.orderStatus}
          </Typography>
        ),
        date: new Date(order.createdAt).toLocaleDateString(),
      }));
      setOrders(formattedOrders);
      setTotalOrders(data?.totalItems || 0);
    }
  }, [data]);

  const handleShowOrders = () => {
    setShowOrders(true);
    refetch(); // Fetch orders when button is clicked
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Order List
      </Typography>

      {!showOrders ? (
        <Button variant="contained" color="primary" onClick={handleShowOrders}>
          Show Orders
        </Button>
      ) : isLoading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error">Error fetching orders.</Typography>
      ) : (
        orders.length > 0 && (
          <Box sx={{ marginTop: "20px" }}>
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
        )
      )}
    </Box>
  );
};

export default ListOfOrders;
