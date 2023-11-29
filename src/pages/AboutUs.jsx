import React, { useEffect } from "react";
import ScrollTopButton from "../components/ScrollTopButton"
import AOS from "aos";
import 'aos/dist/aos.css';

export default function AboutUs() {

    useEffect(() => {
        AOS.init({duration: 3000})
    }, [])

    return (
        <>

            <div className="about-us-container">

            <div className="about-us-title">
                <h1>About Us</h1>
                <p>Kimtrang Nguyen Technology</p>
            </div>

            <div className="our-product-container" data-aos="fade-in">

                <div className="card-3">
                    <h1>Our Vision</h1>
                    <p>Healthcare records are the most common stolen information. Blockchain technology will bring greater safety and security into healthcare by protecting sensitive medical information and records. Patients and healthcare providers will be protected, resulting in better patient care and outcomes. </p>
                    <h2 className="bi bi-rocket-takeoff" data-aos="fade-right"></h2>
                </div>

                <div className="card-4">
                    <h1>Our Product</h1>
                    <p>Our technology seamlessly integrates with electronic health records systems, providing a robust solution for securely sharing and storing medical information. Blockchain will elevate the safeguard of shared data among various providers, the patient, and third-party entities. By leveraging blockchain technology, we enhance security measures, ensuring that only authorized users have access to specific medical data. This not only increases the protection of patient information, such as name, birthdate, addresses, insurance information, SSN, and credit card data, but also safeguards sensitive hospital or clinic information, including human resources data, workflow management, resource allocation, and research and clinical data. The incorporation of healthcare analytics, encompassing both clinical and operational aspects, further enhances the efficacy of our solution. Utilizing blockchain technology, we secure the stored data, ensuring the integrity and privacy required for healthcare data analytics. This comprehensive approach not only addresses security concerns, but also lays the foundation for an advanced and streamlined healthcare information management system.</p>
                </div>
            </div>

            <div className="container-11" data-aos="fade-in">

                <div className="card-5">
                    <h1>Real Life Example</h1>
                    <p>BurstIQ is a company that currently utilizes blockchain technology for patient record management. It has the ability to secure medical records and safely share data.  </p>
                
                    <h1>Advantages and Strengths of KTN Tech</h1>
                    <p>Compared to current and active blockchain technology in healthcare, our product takes patient record management within EHRs a step further by utilizing healthcare data analytics. With the use of both record management and data analytics, there will be improvements in many areas in healthcare. Improvements resulted in better patient care, greater coordination, more time with healthcare providers, and decrease in burnouts.</p>
                </div>

                <div className="card-6">
                    <a href="https://www.youtube.com/watch?v=WZdvmb43Fzw" target="_blank">The Most Advanced Health Blockchain Network <i className="bi bi-link"></i></a>
                <iframe src="https://www.youtube.com/embed/WZdvmb43Fzw" width="700" height="400" className="video" allowFullScreen></iframe>
                </div>
            </div>
            </div>

            <ScrollTopButton />


        </>
    )
}