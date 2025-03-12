import React from "react";
import { Palette, Heart, Gem, Star } from "lucide-react";

const featuredArtisans = [
  {
    id: 1,
    name: "Maria Crafts",
    specialty: "Handwoven Textiles",
    image:
      "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    location: "Barcelona, Spain",
  },
  {
    id: 2,
    name: "Wood & Soul",
    specialty: "Wooden Sculptures",
    image:
      "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    location: "Portland, USA",
  },
  {
    id: 3,
    name: "Ceramic Dreams",
    specialty: "Handmade Pottery",
    image:
      "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    location: "Kyoto, Japan",
  },
];

const features = [
  {
    icon: <Palette className="w-8 h-8 text-amber-600" />,
    title: "Authentic Artisans",
    description: "Verified craftspeople from around the world.",
  },
  {
    icon: <Heart className="w-8 h-8 text-amber-600" />,
    title: "Handcrafted Quality",
    description: "Each piece tells a unique story.",
  },
  {
    icon: <Gem className="w-8 h-8 text-amber-600" />,
    title: "Fair Trade",
    description: "Supporting sustainable artisan communities.",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-md py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          <div className="flex items-center">
            <Palette className="h-8 w-8 text-amber-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">CraftConnect</span>
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
            <a
              href="/login"
              className="px-4 py-2 text-sm font-semibold text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            >
              Login
            </a>
            <a
              href="/signup"
              className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg hover:opacity-90 transition"
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Discover Handcrafted <span className="text-amber-600">Treasures</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Discover unique handcrafted treasures from talented artisans around the globe. Every
            purchase supports traditional craftsmanship and sustainable practices.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <a
              href="#"
              className="px-6 py-3 text-white bg-amber-600 rounded-md hover:bg-amber-700 transition"
            >
              Explore Crafts
            </a>
            <a
              href="#"
              className="px-6 py-3 border border-amber-600 text-amber-600 rounded-md hover:bg-amber-50 transition"
            >
              Become an Artisan
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-stone-100 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Artisans */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Featured Artisans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArtisans.map((artisan) => (
            <div key={artisan.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={artisan.image} alt={artisan.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{artisan.name}</h3>
                <p className="text-amber-600 font-medium mt-1">{artisan.specialty}</p>
                <div className="flex items-center mt-2">
                  <Star className="h-5 w-5 text-amber-400" />
                  <span className="ml-1 text-sm text-gray-500">{artisan.rating}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-500">{artisan.location}</span>
                </div>
                <button className="mt-4 w-full bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700 transition">
                  View Collection
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
