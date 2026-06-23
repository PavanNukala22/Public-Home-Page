import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Hero from "./components/Hero";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ArtisanProfile from "./pages/ArtisanProfile";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/dashboard" element={<Dashboard />} />

  <Route path="/products" element={<ProductListing />} />
  <Route path="/product-details/:id" element={<ProductDetails />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/artisan/:id" element={<ArtisanProfile />} />
</Routes>
    </BrowserRouter>
  );
}

export default App;