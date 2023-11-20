import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import PriceAddOns from "../components/PriceAddOns";
import AOS from "aos";
import 'aos/dist/aos.css';

export default function Pricing() {

    const [price, setPrice] = useState(true);

    function monthlyPrice() {
        setPrice(false);

        document.querySelector('.monthly-button').style.border = '1px solid black';
        document.querySelector('.yearly-button').style.border = 'none';
    }

    function yearlyPrice() {
        setPrice(true);

        document.querySelector('.yearly-button').style.border = '1px solid black';
        document.querySelector('.monthly-button').style.border = 'none';
    }

    useEffect(() => {
        AOS.init({duration: 3000})
    }, [])


    return (
        <>
        <Navbar />
        <div className="pricing-container">

            <div className="pricing-title">
                <h1 className="text-center">Get the complete platform.</h1>
                <p>How Often Do You Want To Pay?</p>
                <div className="buttons">
                    <button onClick={monthlyPrice} className="monthly-button">Monthly</button>
                    <button onClick={yearlyPrice} className="yearly-button">Yearly <i className="bi bi-tag"></i> Get 1 Month Free</button>
                </div>
            </div>


            {price ? (
                <div className="price-options-container" data-aos="fade-in">

                <div className="card-1">
                    <h1>7 Day Free Trial</h1>
                    <p className="text-center">The basics for individuals and organizations</p>
                    <h4><i className="bi bi-currency-dollar"></i>0</h4>
                    <button>Join For free</button>
                    <div className="option-1-info">
                        <ul>
                            <li>Organization and Team Management</li>
                            <li>Automatic Version Updates</li>
                            <li>24/7 IT Support</li>
                            <li>Community support</li>
                            <li className="empty-space">.</li>
                            <li className="empty-space">.</li>
                        </ul>
                    </div>
                </div>

                <div className="card-2">
                    <h1>Team</h1>
                    <p className="text-center">Advanced collaboration for individuals and organizations</p>
                    <h4><i className="bi bi-currency-dollar"></i>1,000</h4>
                    <button>Continue with Team</button>
                    <div className="option-2-info">
                        <ul>
                            <li>Everything included in Free plus...</li>
                            <li>Protected Branches</li>
                            <li>Audit Logs</li>
                            <li>Invoice Billing</li>
                            <li>Web Based Support</li>
                            <li>Information Security Support</li>
                        </ul>
                    </div>
                </div>

            </div>
            ) : (
            <div className="price-options-container">

                <div className="card-1">
                    <h1>7 Day Free Trial</h1>
                    <p className="text-center">The basics for individuals and organizations</p>
                    <h4><i className="bi bi-currency-dollar"></i>0</h4>
                    <button>Join For free</button>
                    <div className="option-1-info">
                        <ul>
                            <li>Organization and Team Management</li>
                            <li>Automatic Version Updates</li>
                            <li>24/7 IT Support</li>
                            <li>Community support</li>
                            <li className="empty-space">.</li>
                            <li className="empty-space">.</li>
                        </ul>
                    </div>
                </div>

                <div className="card-2">
                    <h1>Team</h1>
                    <p className="text-center">Advanced collaboration for individuals and organizations</p>
                    <h4><i className="bi bi-currency-dollar"></i>100</h4>
                    <button>Continue with Team</button>
                    <div className="option-2-info">
                        <ul>
                            <li>Everything included in Free plus...</li>
                            <li>Protected Branches</li>
                            <li>Audit Logs</li>
                            <li>Invoice Billing</li>
                            <li>Web Based Support</li>
                            <li>Information Security Support</li>
                        </ul>
                    </div>
                </div>

            </div>
            )}

        <PriceAddOns />

        </div>
        </>
    )
}