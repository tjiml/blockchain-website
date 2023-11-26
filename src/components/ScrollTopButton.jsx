import React, { useState, useEffect } from "react";

export default function ScrollTop() {

    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
            window.addEventListener("scroll", () => {
                if (window.scrollY > 500) {
                    setBackToTop(true);
                } else {
                    setBackToTop(false);
                }
            })
        }, [])

    function scrollUp() {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
        }

    return (
        <>
        {backToTop && (
                    <button className="back-to-top-button" onClick={scrollUp}>BACK TO TOP <i className="bi bi-arrow-up-short"></i></button>
                )}
        </>
    )
}