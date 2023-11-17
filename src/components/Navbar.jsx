import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

    const [click, setClick] = useState(false);

    function handleClick() {
        setClick(!click)
    }

    function closeMobileMenu() {
        setClick(false);
    }


    return (
        <>
        <div className="nav-container">
            <div className="menu-icon" onClick={handleClick}>
                <i className="bi bi-list"></i>
            </div>
            <div className="nav-list">
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li onClick={closeMobileMenu} 
                        className="x-nav list-inline-item">
                        <i className="bi bi-x-lg"></i>
                    </li>

                    <Link to="/"><li className="links list-inline-item" 
                        onClick={closeMobileMenu}>
                            Home
                        </li>
                    </Link>

                    <Link to="/product"><li onClick={closeMobileMenu}
                    className="links list-inline-item">
                        Product
                    </li></Link>

                    <Link to="/support"><li onClick={closeMobileMenu}
                    className="links list-inline-item">
                        Support
                    </li>
                    </Link>

                    <Link to="/pricing">
                        <li className="links list-inline-item" onClick={closeMobileMenu}>
                            Pricing
                        </li>
                    </Link>

                </ul>
            </div>
        </div>


        </>
    )
}