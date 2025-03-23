import React from 'react'
import { Link } from 'react-router-dom'
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collisions";


const Hero = () => {
  return (
    <BackgroundBeamsWithCollision>
      <section className="bg-white py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Discover Handcrafted{" "}
            <span className="text-amber-600">Treasures</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Discover unique handcrafted treasures from talented artisans around
            the globe. Every purchase supports traditional craftsmanship and
            sustainable practices.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <Link
              to="/explore"
              className="px-6 py-3 text-white bg-amber-600 rounded-md hover:bg-amber-700 transition"
            >
              Explore Crafts
            </Link>
            <Link
              to="/signup"
              className="px-6 py-3 border border-amber-600 text-amber-600 rounded-md hover:bg-amber-50 transition"
            >
              Become an Artisan
            </Link>
          </div>
        </div>
      </section>
    </BackgroundBeamsWithCollision>
  );
}

export default Hero
