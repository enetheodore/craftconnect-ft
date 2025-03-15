import React from "react";
import { useCart } from "../../context/CartContext";
import CheckOut from "./CheckOut";

const CartList = () => {
  const {
    cart,
    addItem,
    removeItem,
    updateItemQuantity,
    clearCart,
    getTotalPrice,
    totalItems,
  } = useCart();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg  m-10">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center border-b pb-4 space-x-6"
            >
              <img
                src={`${import.meta.env.VITE_API_URL}/file/${item.images[0]}`}
                alt={item.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.description}</p>
                <p className="text-gray-800 font-medium">
                  Price: ${item.price}
                </p>
                <div className="flex items-center space-x-2 mt-2">
                  <button
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() =>
                      updateItemQuantity(item._id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <span className="font-medium">{item.quantity}</span>
                  <button
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() =>
                      updateItemQuantity(item._id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
                <button
                  className="mt-2 text-red-600 hover:underline"
                  onClick={() => removeItem(item._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-6 border-t pt-4">
        <h3 className="text-xl font-semibold">Total: ${getTotalPrice()}</h3>
      </div>
      <div className="flex justify-between">
        {getTotalPrice() != 0 ? (
          <>
            <CheckOut totalPrice={getTotalPrice()} />
          </>
        ) : (
          <></>
        )}
        <button
          className="mt-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={clearCart}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartList;
