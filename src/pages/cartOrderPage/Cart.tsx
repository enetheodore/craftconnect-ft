import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { apiRequest } from "../../utils/apiUtils";

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
  }

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const data = await apiRequest<{ items: { id: string; name: string; price: number; quantity: number; }[] }>("/cart", "GET");
        setCartItems(data.items);
      } catch {
        setError("Failed to load cart items.");
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, []);

  const handleRemoveItem = async (productId: string) => {
    try {
      await apiRequest(`/cart/${productId}`, "DELETE");
      setCartItems(cartItems.filter((item) => item.id !== productId));
    } catch {
      setError("Failed to remove item.");
    }
  };

  const handleUpdateQuantity = async (productId: string, quantity: number) => {
    try {
      await apiRequest(`/cart/${productId}`, "PUT", { quantity });
      setCartItems(cartItems.map((item) => (item.id === productId ? { ...item, quantity } : item)));
    } catch {
      setError("Failed to update quantity.");
    }
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">
                  ${item.price} x {item.quantity}
                </p>
              </div>
              <div>
                <button
                  onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                  className="px-2 py-1 bg-gray-300 rounded-l"
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="px-4">{item.quantity}</span>
                <button
                  onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 bg-gray-300 rounded-r"
                >
                  +
                </button>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="ml-4 px-3 py-1 bg-red-500 text-white rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={handleCheckout}
            className="w-full mt-6 py-2 bg-amber-600 text-white rounded-lg"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
