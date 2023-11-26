import React from "react";
import HomepageContent from "../components/HomepageContent";
import Navbar from "../components/Navbar";
import ScrollTopButton from "../components/ScrollTopButton"


export default function Home() {

    return (
        <>
        <Navbar />
        <HomepageContent />
        <ScrollTopButton />
        </>
    )
}  