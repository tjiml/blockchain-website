import React, { useState } from "react";
import Navbar2 from "../components/Navbar2";
import PriceAddOns from "../components/PriceAddOns";

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


    return (
        <>
        <Navbar2 />
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
                <div className="price-options-container">

                <div className="card-1">
                    <h1>7 Day Free Trial</h1>
                    <p className="text-center">The basics for individuals and organizations</p>
                    <h4><i className="bi bi-currency-dollar"></i>0</h4>
                    <button>Join For free</button>
                    <div className="option-1-info">
                        <ul>
                            <li>Unlimited public/private repositories</li>
                            <li>Automatic version updates</li>
                            <li>500 MB packages storage</li>
                            <li>Community support</li>
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
                            <li>Multiple reviewers in pull requests</li>
                            <li>2 GB packages storage</li>
                            <li>Web based support</li>
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
                            <li>Unlimited public/private repositories</li>
                            <li>Automatic version updates</li>
                            <li>500 MB packages storage</li>
                            <li>Community support</li>
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
                            <li>Multiple reviewers in pull requests</li>
                            <li>2 GB packages storage</li>
                            <li>Web based support</li>
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