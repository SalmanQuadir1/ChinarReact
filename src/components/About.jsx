import React from 'react'

const About = () => {
    return (
        <>
            <>
                <div className="page-heading header-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <span className="breadcrumb">
                                    <a href="#">Home</a> /About Us
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-property section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="main-image ">
                                    <img
                                        className="rounded-lg "
                                        height={350}
                                        width={300}
                                        src="assets/images/banner-image.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="main-content">
                                    <h4>Our Introduction</h4>
                                    <p>
                                        We introduce ourselves as pioneers in manufacturing of{" "}
                                        <strong>
                                            {" "}
                                            Voltage Stabilizers, Float and Boost Battery Chargers, Static
                                            Transformer-less voltage stabilizers
                                        </strong>{" "}
                                        since last more than 3 decades.
                                    </p>
                                    <br />
                                    <p>
                                        Our products have been widely acclaimed by our customer that
                                        include Government Department, Industrial Establishments,
                                        Educational Institutions, Research Centers, Government owned
                                        Public Undertakings, Domestic Sectors, Service Sectors,
                                        Hospitality Industry, Health Care and the list goes on.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 mt-5">
                                <p>
                                    <strong>LATE MR. ABDUL AHAD BHAT</strong>
                                    <br />
                                    From very first day of our inception way back in the year 1983, this
                                    unit was set up by our guide and mentor Late Mr. Abdul Ahad Bhat
                                    whose belief laid in the philosophy of affordable cost and
                                    exceptionally good quality for customers. Under no circumstances, he
                                    would compromise with the quality of the product. His vision will
                                    always remain a big source of motivation for us.
                                </p>
                            </div>
                            <div className="col-md-6 ">
                                <div className="main-image mb-5 ">
                                    <img
                                        className="rounded-lg"
                                        src="assets/images/founder.png"
                                        alt="founderImg"
                                        height="350px"
                                        width="300px"
                                    />
                                </div>
                            </div>
                            <div className="col-md-12  m-5">
                                <div className="main-content">
                                    <h4>Certificate of Compliances</h4>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <img src="assets/images/cert2.jpg" alt="cert1" />
                                    </div>
                                    <div className="col-md-4">
                                        <img src="assets/images/cert_ISO-9001-2008.jpg" alt="cert2" />
                                    </div>
                                    <div className="col-md-4">
                                        <img
                                            src="assets/images/certificate-of-compliance.jpg"
                                            alt="cert12"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-5  card mb-3 mx-2">
                                    <div className=" p-3">
                                        <h5 className="card-title">MICROPROCESSORS BASED</h5>
                                        <p className=" ">
                                            We have been able to successfully develop the advanced
                                            microprocessors based controllers for our products for increased
                                            safety, accuracy and reliability.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-5 card mb-3 mx-1">
                                    <div className="p-3">
                                        <h5 className="card-title">CUSTOMER SATISFACTION</h5>
                                        <p className=" ">
                                            We at Chinar Electricals take this opportunity to assure our
                                            customers of our commitment towards ethical business practices,
                                            compromised quality, prompt and efficient after sales support.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </>
    )
}

export default About