import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              About CraftConnect
            </h3>
            <p className="text-gray-400">
              Empowering artisans and preserving traditional craftsmanship
              through global connections.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              For Artisans
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-400">
                  How to Join
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-400">
                  Seller Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-400">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-400">
                  Resources
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              For Customers
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-400">
                  How to Buy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-400">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-400">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-400">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Stay Connected
            </h3>
            <p className="text-gray-400 mb-4">
              Join our community to discover unique crafts and artisan stories.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-md focus:outline-none"
              />
              <button className="bg-amber-600 text-white px-4 py-2 rounded-r-md hover:bg-amber-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            &copy; 2025 CraftConnect. Supporting artisans worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
