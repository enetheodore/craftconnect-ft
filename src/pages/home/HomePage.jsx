import Login from "../login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../components/home/Home";
import Explore from "../../components/home/Explore";
import CartList from "../../components/home/CartList";
import HomeNav from "../../components/home/HomeNav";
import Footer from "../../components/home/Footer";

const HomePage = () => {

  return (
    <div className=" ">
      <BrowserRouter>
        <HomeNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Login />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/cart" element={<CartList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default HomePage;
