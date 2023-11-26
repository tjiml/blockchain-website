import React from "react";
import ProductContent from "../components/ProductContent";
import Navbar from "../components/Navbar";
import ScrollTopButton from "../components/ScrollTopButton";

export default function Product() {
    return (
        <>
        <Navbar />
        <ProductContent />
        <ScrollTopButton />
        </>
    )
}