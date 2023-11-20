import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Support from "./pages/Support";
import Pricing from "./pages/Pricing";
import Footer from "./components/Footer";
import Features from "./pages/Features";
import ScrollTop from "./components/ScrollTop";

export default function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/product" element={<Product />}/>
          <Route path="/support" element={<Support />}/>
          <Route path="/pricing" element={<Pricing />}/>
          <Route path="/features" element={<Features />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}
