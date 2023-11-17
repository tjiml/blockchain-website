import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

export default function HomepageContent() {

    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])


    return (
        <>
        <div className="content-container">

            <div className="container-1" data-aos="fade-down">
                <h1>Blockchain</h1>
                <ul>
                    <li className="list-inline-item"><i className="bi bi-bar-chart"></i></li>
                    <li className="list-inline-item"><i className="bi bi-hospital"></i></li>
                    <li className="list-inline-item"><i className="bi bi-motherboard"></i></li>
                    <li className="list-inline-item"><i className="bi bi-bounding-box"></i></li>
                    <li className="list-inline-item"><i className="bi bi-share"></i></li>
                </ul>
            </div>

            <section className="container-2" data-aos="fade-up">
                <h1>What Is Blockchain Technology?</h1>
                <p>Blockchain is a distributed and decentralized database or digital ledger technology with the ability to securely share and record transactions across a network of computers. It can help make data in different industries to be immutable, this means it has the inability to be altered. Each set of transactions (also known as a block), is linked to the previous transaction or block. This forms a continuous chain of blocks. Once a block is added to the blockchain, it is extremely difficult to alter any information within it. </p>
            </section>

            <div className="container-1" data-aos="fade-down">
                <h1>Healthcare Analytics</h1>
                <ul>
                    <li className="list-inline-item"><i className="bi bi-sliders"></i></li>
                    <li className="list-inline-item"><i className="bi bi-graph-up-arrow"></i></li>
                    <li className="list-inline-item"><i className="bi bi-diagram-3"></i></li>
                    <li className="list-inline-item"><i className="bi bi-list-check"></i></li>
                    <li className="list-inline-item"><i className="bi bi-layers-half"></i></li>
                </ul>
            </div>

            <section className="container-2" data-aos="fade-up">
                <h1>What Is Healthcare Analytics?</h1>
                <p>Healthcare analytics is an advanced analytics tool that uses healthcare data in order to identify patterns or insights that can help with clinical-decision making, process improvements, and resource allocation. It can help with productivity, patient outcomes, and patient care. Due to the vast health data that will be stored and analyzed, it must be secured. Blockchain can provide privacy, safety, and security of the health data. Healthcare analytics is the process of collecting, aggregating, and analyzing healthcare data to extract insights and support decision-making in the healthcare industry.</p>
                
                <div className="image-container-2" data-aos="fade-in">
                    <h1 className="image-2"></h1>
                    <p>Kim Nguyen. (October 27, 2023). Benefits of Healthcare Data Analytics. Retrieved from http://www.canva.com/design/Benefits of Healthcare Data Analytics</p>
                </div>
            
            </section>

            <section className="container-3" data-aos="fade-up">
                <h1>Productivity</h1>
                <p>With the help of healthcare analytics, there will be an increase in productivity in healthcare settings by leveraging data-driven insights to <span>optimize resource allocation, decision-making, and processes.</span> Increase in productivity can help with improving patient outcomes, patient care, decrease health worker burnout, and <span>improve patient flow management.</span></p>
                
                <div className="image-container-3" data-aos="fade-in">
                    <p>Kim Nguyen. (November 2, 2023). Productivity with Blockchain. Retrieved from http://canva.com/design/Productivity with Blockchain</p>
                    <h1 className="image-3"></h1>
                </div>
            
            </section>

            <section className="container-4" data-aos="fade-up">
                <h1>Security</h1>
                <p>Blockchain technology will be implemented to <span>heighten security and privacy</span> of stored medical records and data while also being <span>HIPAA compliant.</span> Increase in security of shared data and transferring data between institutes or different health systems. Access to stored medical data and other sensitive data will only be granted to authorized parties. <span>This will enhance data security and reduce the risk of data breaches and unauthorized access.</span></p>
                
                <div className="image-container-4" data-aos="fade-in">
                    <h1 className="image-4"></h1>
                    <p>Kim Nguyen. (October 27, 2023). Benefits of Healthcare Data Analytics. Retrieved from http://www.canva.com/design/Benefits of Healthcare Data Analytics</p>
                </div>
            
            </section>

            <section className="container-8" data-aos="fade-up">
                <h1>Transferability</h1>
                <p><span>Blockchain can assist with securely sharing or transferring a patient's medical data to other health providers, to the patient, insurance companies, etc.</span> Each transaction or sharing of medical data (health records, test results, treatment plans, etc.) is time-stamped and encrypted to ensure the integrity and confidentiality of the information. <span>Access to medical data, information, or other sensitive information will only be granted to those who are authorized.</span></p>
            </section>

            <section className="container-5" data-aos="fade-up">
                <h1>Types of Data Analytics in Healthcare</h1>
                
                <div className="data-container">
                    <div className="cards-1">
                        <h1>Clinical Analytics</h1>
                        <p><span>Analyzes clinical data in order to enhance diagnosis, treatment, and patient outcomes.</span> It focuses on patient care by monitoring patient vital signs, medical history, laboratory results, and treatment plans to identify patterns, predict diseases, and improve clinical decision-making.</p>
                        <h1 className="image-5"></h1>
                        <p className="image-ref">Kim Nguyen. (October 27, 2023). Clinical Analytics. Retrieved from http://www.canva.com/design/Clinical Analytics</p>
                    </div>
                    <div className="cards-2">
                        <h1>Operational Analytics</h1>
                        <p><span>Analyzes data that are related to resource allocation, staff scheduling, patient flow, and facility management.</span> It focuses on improving the efficiency and effectiveness of healthcare operations in order to reduce costs, streamline processes, and strengthen overall patient experience.</p>
                        <h1 className="image-6"></h1>
                        <p className="image-ref">Kim Nguyen. (October 27, 2023). Operational Analytics. Retrieved from http://canva.com/design/Operational Analytics</p>
                    </div> 
                </div>

            </section>

        </div>
        </>
    )
}