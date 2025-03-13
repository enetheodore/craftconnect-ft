import React from 'react'
import { Gem, Heart, Palette, Star } from "lucide-react";

const Features = () => {
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
  return (
    <div>
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
    </div>
  )
}

export default Features
