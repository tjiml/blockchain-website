import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar2() {

    const [click, setClick] = useState(false);

    function handleClick() {
        setClick(!click)
    }

    function closeMobileMenu() {
        setClick(false);
    }


    return (
        <>
        <div className="nav-container-2">
            <div className="menu-icon-2" onClick={handleClick}>
                <i className="bi bi-list"></i>
            </div>
            <div className="nav-list">
                <ul className={click ? "nav-menu-2 active" : "nav-menu-2"}>
                    <li onClick={closeMobileMenu} 
                        className="x-nav list-inline-item">
                        <i className="bi bi-x-lg"></i>
                    </li>

                    <Link 
                    to="/">
                        <li className="links-2 list-inline-item" 
                        onClick={closeMobileMenu}>
                            Home
                        </li>
                    </Link>

                    <Link to="/product"><li onClick={closeMobileMenu}
                    className="links-2 list-inline-item">
                        Product
                    </li></Link>

                    <Link to="/support"><li onClick={closeMobileMenu}
                    className="links-2 list-inline-item">
                        Support
                    </li>
                    </Link>

                    <Link
                    to="/pricing">
                        <li className="links-2 list-inline-item" onClick={closeMobileMenu}>
                            Pricing
                        </li>
                    </Link>

                </ul>
            </div>
        </div>


        </>
    )
}