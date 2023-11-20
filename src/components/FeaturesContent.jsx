import React from "react";

export default function FeaturesContent() {

    // function displayDropdown1() {
    //     document.querySelector('.dropdown-1').style.opacity= '1';
    // }

    // function closeDropdown1() {
    //     document.querySelector('.dropdown-1').style.opacity= '0';
    // }

    return (
        <>
        <div className="features-container">

            <div className="features-title">
                <h1>How to Measure Success</h1>
            </div>

            <div className="features-content-container">
                <h1>Google Business Analytics</h1>

                <div className="features-bar">

                    <div className="feature-1">
                        <h2 className="bi bi-chat-square-heart"></h2>
                        <h1>Engagement Reports</h1>

                        <div className="dropdown-1">
                            <ul>
                                <li>Number of clicks</li>
                                <li>Website reaction time</li>
                                <li>Pages user interacted with most</li>
                            </ul>
                        </div>
                    </div>

                    <div className="feature-2">
                        <h2 className="bi bi-activity"></h2>
                        <h1>Real Time Reports</h1>

                        <div className="dropdown-2">
                            <ul>
                                <li>Displays and monitors website's activity</li>
                            </ul>
                        </div>
                    </div>

                    <div className="feature-3">
                        <h2 className="bi bi-globe-americas"></h2>
                        <h1>Acquisition Reports</h1>

                        <div className="dropdown-3">
                            <ul>
                                <li>How users reached the website</li>
                                <li>Traffic and engagement of the website</li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        </>
    )
}