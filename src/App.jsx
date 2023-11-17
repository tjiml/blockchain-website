import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Support from "./pages/Support";
import Pricing from "./pages/Pricing";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/product" element={<Product />}/>
          <Route path="/support" element={<Support />}/>
          <Route path="/pricing" element={<Pricing />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}
