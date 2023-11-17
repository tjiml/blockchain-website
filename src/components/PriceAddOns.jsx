import React from "react";

export default function PriceAddOns() {
    return (
        <>
        <div className="add-on-container">

            <div className="add-on-title">
                <h1>Additional Add Ons</h1>
            </div>

            <div className="add-on-cards-container">

                <div className="add-on-1-card">
                    <i className="bi bi-people"></i>
                    <h1>Github Copilot</h1>
                    <p>Starting at $10/month after 30 day trial</p>
                </div>

                <div className="add-on-2-card">
                    <i className="bi bi-pc-display"></i>
                    <h1>Codespaces</h1>
                    <p>Starting at $0.18/hour of compute and $0.07/GB of storage</p>
                </div>

                <div className="add-on-3-card">
                    <i className="bi bi-archive"></i>
                    <h1>Large Fil Storage</h1>
                    <p>$5/month for 50 GB bandwidth and 50 GB for storage</p>
                </div>

                <div className="add-on-4-card">
                    <i className="bi bi-shield-lock"></i>
                    <h1>Advanced Security</h1>
                    <p>$49/month per active committer</p>
                </div>

            </div>
        </div>
        </>
    )
}