import { Button } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Gem, Heart, Palette, Star } from "lucide-react";
import HomeNav from "./HomeNav";
import Hero from "./Hero";
import Features from "./Features";
import FeaturedArtisan from "./FeaturedArtisan";
import Cto from "./Cto";
import Footer from "./Footer";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <HomeNav />
      <Hero />

      <Features />
      <FeaturedArtisan />

      <Cto />
      <Footer />
    </div>
  );
};

export default Home;
