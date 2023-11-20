import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <>
        <div className="footer-container">

            <div className="footer-links-container">
            
                <ul>

                    <Link to="/" 
                        className="footer-links"
                        onClick={() => {
                            window.scroll({
                                top: 0, 
                                behavior: auto})
                        }}><li>Home</li>
                        </Link>

                        <Link to="/product" 
                        className="footer-links"
                        onClick={() => {
                            window.scroll({
                                top: 0, 
                                behavior: auto})
                        }}><li>Product</li>
                        </Link>

                        <Link to="/support" 
                        className="footer-links"
                        onClick={() => {
                            window.scroll({
                                top: 0, 
                                behavior: auto})
                        }}><li>Support</li>
                        </Link>

                        <Link to="/pricing" 
                        className="footer-links"
                        onClick={() => {
                            window.scroll({
                                top: 0, 
                                behavior: auto})
                        }}><li>Pricing</li>
                        </Link>

                        <Link to="/features" 
                        className="footer-links"
                        onClick={() => {
                            window.scroll({
                                top: 0, 
                                behavior: auto})
                        }}><li>Features</li>
                        </Link>

        
                </ul>

            </div>

            <div className="footer-copyright-container">

                <ul>
                    <li className="list-inline-item">© 2023 Blockchain Healthcare.</li>
                    <li className="list-inline-item">All Rights Reserved.</li>
                </ul>

            </div>
            
        </div>
        </>
    )
}