import React, { useState, useEffect } from "react";
import References from "../components/References";
import ScrollTopButton from "../components/ScrollTopButton"
import AOS from "aos";
import 'aos/dist/aos.css';

export default function Support() {

    const [module1, setModule1] = useState(false);
    const [module2, setModule2] = useState(false);
    const [module3, setModule3] = useState(false);

    function openModule1() {
        setModule1(true);
        document.querySelector('.support-container').style.filter = 'blur(5px)';
    }

    function closeModule1() {
        setModule1(false);
        document.querySelector('.support-container').style.filter = 'none';
    }

    function openModule2() {
        setModule2(true);
        document.querySelector('.support-container').style.filter = 'blur(5px)';
    }

    function closeModule2() {
        setModule2(false);
        document.querySelector('.support-container').style.filter = 'none';
    }

    function openModule3() {
        setModule3(true);
        document.querySelector('.support-container').style.filter = 'blur(5px)';
    }

    function closeModule3() {
        setModule3(false);
        document.querySelector('.support-container').style.filter = 'none';
    }

    function submitModule1() {
        if (document.querySelector('.f-name').value === "" ||
            document.querySelector('.email').value === "" || 
            document.querySelector('.text-area').value === "") {
                document.querySelector('.error-text').innerHTML = 'ALL FIELDS REQUIRED';
            } else if (!document.querySelector('.email').value.includes('@gmail.com') &&
                       !document.querySelector('.email').value.includes('@yahoo.com') &&
                       !document.querySelector('.email').value.includes('@hootmail.com')) {
                document.querySelector('.error-text').innerHTML = 'ENTER VALID EMAIL';
            } else {
                alert('Message Sent!');
                setModule1(false);
                document.querySelector('.support-container').style.filter = 'none';
            }
    }

    function submitModule2() {
        if (document.querySelector('.f-name').value === "" ||
            document.querySelector('.email').value === "" ||
            document.querySelector('.job-title').value === "" ||
            document.querySelector('.company').value === "" || 
            document.querySelector('.text-area').value === "") {
                document.querySelector('.error-text').innerHTML = 'ALL FIELDS REQUIRED';
            } else if (!document.querySelector('.email').value.includes('@gmail.com') &&
                       !document.querySelector('.email').value.includes('@yahoo.com') &&
                       !document.querySelector('.email').value.includes('@hootmail.com')) {
                document.querySelector('.error-text').innerHTML = 'ENTER VALID EMAIL';
            } else {
                alert('Message Sent!');
                setModule2(false);
                document.querySelector('.support-container').style.filter = 'none';
            }
    }

    function submitModule3() {
        if (document.querySelector('.f-name').value === "" ||
            document.querySelector('.email').value === "" || 
            document.querySelector('.organization').value === "" ||
            document.querySelector('.text-area').value === "") {
                document.querySelector('.error-text').innerHTML = 'ALL FIELDS REQUIRED';
            } else if (!document.querySelector('.email').value.includes('@gmail.com') &&
                       !document.querySelector('.email').value.includes('@yahoo.com') &&
                       !document.querySelector('.email').value.includes('@hootmail.com')) {
                document.querySelector('.error-text').innerHTML = 'ENTER VALID EMAIL';
            } else {
                alert('Message Sent!');
                setModule3(false);
                document.querySelector('.support-container').style.filter = 'none';
            }
    }

    useEffect(() => {
        AOS.init({duration: 3000})
    }, [])


    return (
        <>
        <div className="support-container">

            <div className="contact-us-title text-center">
                <h1>Contact Us</h1>
                <p>How Can We Help You?</p>
                <h4>Learn about our products and services, send a media inquiry, and more.</h4>
            </div>

            <div className="support-cards-container" data-aos="fade-in">

                <div className="support-card-1" onClick={openModule1}>
                    <h5>HR/People Operations</h5>
                    <p>Want to learn more career opportunities or company culture? Speak to someone in our People Operations Department.</p>
                    <h6>Learn More+</h6>
                </div>

                <div className="support-card-2" onClick={openModule2}>
                    <h5>Product and Services</h5>
                    <p>Interested in speaking with someone about our Data Platform, Analytics Applications, and Services? Fill out this form.</p>
                    <h6>Learn More+</h6>
                </div>
                
                <div className="support-card-3" onClick={openModule3}>
                    <h5>Media/Press</h5>
                    <p>Need to speak with someone in PR? Reach out here if you’re a member of the media, need a press kit, or have a news tip.</p>
                    <h6>Learn More+</h6>
                </div>

                <div className="support-card-4" onClick={openModule3}>
                    <h5>Vendor Inquiry</h5>
                    <p>Are you a vendor with a specific question about an event, working with Marketing, or other similar request? Contact us here.</p>
                    <h6>Learn More+</h6>
                </div>

                <a href="https://www.healthcatalyst.com/support" target="_blank" className="support-card-5">
                    <div>
                    <h5>Client Support</h5>
                    <p>Looking for support? Reach out to Client Support Services to report an issue, ask a question, or request a service here.</p>
                    <h6>Learn More+</h6>
                    </div>
                </a>

                <a href="https://www.healthcatalyst.com/partner-program" target="_blank" className="support-card-6">
                    <div>
                    <h5>Partnership Opportunities</h5>
                    <p>Interested in our Partner Program? Combine data and expertise to achieve greater scale and learn more about our Partner Program</p>
                    <h6>Learn More+</h6>
                    </div>
                </a>
                
            </div>

            <hr className="solid"></hr>

            <References />

        </div>
         
        { module1 ? (
            <>
            <div className="module-container-1">
            <div className="input-container">
                <i className="bi bi-x-lg" onClick={closeModule1}></i>
                <p className="error-text"></p>
                <input type="text" className="f-name" placeholder="Full Name"/>
                <input type="email" className="email" placeholder="Email" />
                <textarea type="text" className="text-area" placeholder="How Can We Help?"/>
                <button onClick={submitModule1}>Submit</button>
            </div>
        </div>
            </>
        ) : (
            <>
            </>
        )}

        { module2 ? (
            <>
            <div className="module-container-2">
            <div className="input-container">
                <i className="bi bi-x-lg" onClick={closeModule2}></i>
                <p className="error-text"></p>
                <input type="text" className="f-name" placeholder="Full Name"/>
                <input type="email" className="email" placeholder="Email" />
                <input type="text" className="job-title" placeholder="Job Title"/>
                <input type="text" className="company" placeholder="Company"/>
                <textarea type="text" className="text-area" placeholder="How Can We Help?"/>
                <button onClick={submitModule2}>Submit</button>
            </div>
        </div>
            </>
        ) : (
            <>
            </>
        )}

        { module3 ? (
            <>
            <div className="module-container-3">
            <div className="input-container">
                <i className="bi bi-x-lg" onClick={closeModule3}></i>
                <p className="error-text"></p>
                <input type="text" className="f-name" placeholder="Full Name"/>
                <input type="email" className="email" placeholder="Email" />
                <input type="text" className="organization" placeholder="Organization"/>
                <textarea type="text" className="text-area" placeholder="How Can We Help?"/>
                <button onClick={submitModule3}>Submit</button>
            </div>
        </div>
            </>
        ) : (
            <>
            </>
        )}

        <ScrollTopButton />
        </>
    )
}