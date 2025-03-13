import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Gem, Heart, Palette, ShoppingCart, Star } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { Badge } from "@mui/material";
const HomeNav = () => {
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
    <nav className="bg-white shadow-md py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <div className="flex items-center">
          <Palette className="h-8 w-8 text-amber-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">
            CraftConnect
          </span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-amber-600 transition">
            Discover
          </a>
          <a href="#" className="text-gray-700 hover:text-amber-600 transition">
            Categories
          </a>
          <a href="#" className="text-gray-700 hover:text-amber-600 transition">
            Join
          </a>
          <a href="#" className="text-gray-700 hover:text-amber-600 transition">
            About
          </a>
        </div>
        <div className="flex space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 text-sm font-semibold text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg hover:opacity-90 transition"
          >
            Sign Up
          </Link>

          <Link to="/cart">
            <Badge badgeContent={totalItems} color="primary">
              <ShoppingCart />
            </Badge>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default HomeNav;
