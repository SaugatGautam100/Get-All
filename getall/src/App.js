import "./App.css";
import CartSection from "./components/Cart";
import Contact from "./components/Contact";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Shop from "./components/Shop";
import SignUp from "./components/SignUp";
import AboutUs from "./components/AboutUs";
import Collection from "./components/Collection";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Features from "./components/Features";
import BecomeSeller from "./components/BecomeSeller";
import Products from "./components/Products";

function App() {
  return (
    <>
    
       <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/collections" element={<Collection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<CartSection />} />
          <Route path="/features" element={<Features />} />
          <Route path="/becomeSeller" element={<BecomeSeller />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
