import React, { useState } from "react";
import DialogComp from "../ui/DialogComp";
import { useAuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { createOrder } from "../../utilities/makeApiRequest";
import { useCart } from "../../context/CartContext";

const CheckOut = ({ totalPrice }) => {
  const [open, setOpen] = useState(false);
  const { authUser } = useAuthContext();
  const navigate = useNavigate();
  const {
    cart,
    addItem,
    removeItem,
    updateItemQuantity,
    clearCart,
    getTotalPrice,
    totalItems,
  } = useCart();
  //   customerId, artisanId, products, totalAmount

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(cart);
    mutation.mutate({
      customerId: authUser._id,
      // artisanId:cart[0].artisanId,
      products: [cart[0]],
      totalAmount: getTotalPrice(),
      // productId:cart[0]._id
    });
    // localStorage.setItem("user", JSON.stringify(formData));
    // console.log("Form Data:", formData);
    // setAuthUser(formData);
    // navigate('/')
  };

  const mutation = useMutation({
    mutationFn: createOrder,
    onSuccess: (data) => {
      console.log("Login successful:", data);
      //   localStorage.setItem("user", JSON.stringify(data.user));
      //   setAuthUser(data.user);
      //   navigate("/");
      setOpen(false);
      clearCart();
      toast("Order created successfully!");
    },
    onError: (error) => {
      // Handle error (e.g., show error message)
      toast.error("Order created failed!");

      console.log("Order create failed:", error);
    },
  });
  return (
    <div>
      <DialogComp
        title="Confirm Checkout"
        open={open}
        setOpen={setOpen}
        triger={
          <>
            <button
              className="mt-3 px-4 py-2 bg-green-500 text-white rounded hover:bg-red-600"
              onClick={() => {
                if (!authUser) {
                  navigate("/login");
                } else {
                  setOpen(true);
                }
              }}
            >
              Check Out
            </button>
          </>
        }
        action={
          <button
            className="mt-3 px-4 py-2 bg-green-500 text-white rounded hover:bg-red-600"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Order
          </button>
        }
        content={<>Confirm check out {totalPrice} ETB</>}
      />
    </div>
  );
};

export default CheckOut;
