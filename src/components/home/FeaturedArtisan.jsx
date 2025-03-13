import React from 'react'
import { Gem, Heart, Palette, Star } from "lucide-react";

const FeaturedArtisan = () => {
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
  return (
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
  )
}

export default FeaturedArtisan
