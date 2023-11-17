import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

export default function ProductContent() {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])

    return (
    <>
    <div className="homepage-container">

        <div className="product-image-container" data-aos="fade-down">
            <img className="blockchain-image" src="https://static.vecteezy.com/system/resources/previews/018/871/950/original/icon-cloud-technology-or-blockchain-cloud-network-connection-access-to-all-devices-on-a-wireless-network-png.png"/>
            <p>vecteezy.com</p>
        </div>
        
        <section className="container-6" data-aos="fade-up">
            <h1>What Is Blockchain Technology?</h1>
            <p>Blockchain is a distributed and decentralized database or digital ledger technology with the ability to securely share and record transactions across a network of computers. It can help make data in different industries to be immutable, this means it has the inability to be altered. Each set of transactions (also known as a block), is linked to the previous transaction or block. This forms a continuous chain of blocks. Once a block is added to the blockchain, it is extremely difficult to alter any information within it.</p>
        </section>

        <section className="container-7" data-aos="fade-right">
            <h1>How can Blockchain be used in Healthcare?</h1>
            <p>Blockchain can be used in healthcare by <span>securely storing and sharing patient health records, ensuring privacy and data integrity.</span> It can also help with exchanging patient health information between different healthcare systems, making it more interoperable. <span>This can ensure that patient data is accurate and accessible to authorized parties.</span></p>

            <div className="image-container-5" data-aos="fade-in">
                <h1 className="image-7"></h1>
                <p>Kim Nguyen. (October 27, 2023). Blockchain with EHRs and Healthcare Data Analytics. Retrieved from http://canva.com/design/Blockchain with EHRs and Healthcare Data Analytics</p>
            </div>
        </section>

        <section className="container-7" data-aos="fade-right">
            <h1>What is Healthcare Analytics?</h1>
            <p>Healthcare analytics is an advanced analytics tool that uses healthcare data in order to identify patterns or insights that can help with clinical-decision making, process improvements, and resource allocation. It can help with productivity, patient outcomes, and patient care. Due to the vast health data that will be stored and analyzed, it must be secured. Blockchain can provide privacy, safety, and security of the health data. </p>
        </section>

        <section className="container-7" data-aos="fade-right">
            <h1>Why use Blockchain with Electronic Health Records (EHRs) and Healthcare Analytics? </h1>
            <p>Blockchain can provide a secure and immutable system for managing electronic health records (EHRs). Blockchain can help with enhancing security of the medical data that is being stored and being analyzed to find patterns or insights for healthcare analytics. It cannot be easily hacked or unauthorized access due to its encryption. Health data security is a top priority for the safety of patients and in order to implement healthcare analytics, high data security also needs to be implemented and prioritized. Both blockchain technology and healthcare analytics will help with patient care outcomes and may alleviate certain healthcare challenges.  </p>
        </section>
    </div>
    </>
    )
}