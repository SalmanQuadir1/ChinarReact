import React from 'react'
import Header from './Fragments/Header'

const Body = () => {
    return (
        <>
            <Header />
            <div className="main-banner">
                <div className="owl-carousel owl-banner">
                    <div className="item item-1">
                        <div className="header-text">
                            <span className="category">
                                Rangreth, <em>Budgam</em>
                            </span>
                            <h2>
                                Hurry!
                                <br />
                                Get the Best Product for you
                            </h2>
                        </div>
                    </div>
                    {/* <div class="item item-2">
        <div class="header-text">
          <span class="category">Melbourne, <em>Australia</em></span>
          <h2>Be Quick!<br>Get the best villa in town</h2>
        </div>
      </div>
      <div class="item item-3">
        <div class="header-text">
          <span class="category">Miami, <em>South Florida</em></span>
          <h2>Act Now!<br>Get the highest level penthouse</h2>
        </div>
      </div> */}
                </div>
            </div>
            <div className="featured section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="left-image">
                                <img src="assets/images/B1.png" alt="" />
                                <a href="property-details.html">
                                    <img
                                        src="assets/images/servo.png"
                                        alt=""
                                        style={{ maxWidth: 60, padding: 0 }}
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="section-heading">
                                <h6>| Featured</h6>
                                <h2>Quality Products </h2>
                            </div>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseThree"
                                        >
                                            Why is chinar the best ?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseThree"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            Our products have been widely acclaimed by our customer that
                                            include Government Department, Industrial Establishments,
                                            Educational Institutions, Research Centers, Government owned
                                            Public Undertakings, Domestic Sectors, Service Sectors,
                                            Hospitality Industry, Health Care and the list goes on.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="video section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-4">
                            <div className="section-heading text-center">
                                <h6>|View Product</h6>
                                <h2>Get Closer View </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="video-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="video-frame">
                                <img
                                    src="assets/images/american-public-power-association-VuR4oHZ3ucc-unsplash.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fun-facts">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="wrapper">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="counter">
                                            <h2
                                                className="timer count-title count-number"
                                                data-to={304}
                                                data-speed={1000}
                                            />
                                            <p className="count-text ">
                                                Projects
                                                <br />
                                                Finished Now
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="counter">
                                            <h2
                                                className="timer count-title count-number"
                                                data-to={12}
                                                data-speed={1000}
                                            />
                                            <p className="count-text ">
                                                Years
                                                <br />
                                                Experience
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="counter">
                                            <h2
                                                className="timer count-title count-number"
                                                data-to={24}
                                                data-speed={1000}
                                            />
                                            <p className="count-text ">
                                                Awards
                                                <br />
                                                Won 2023
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section best-deal">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="section-heading">
                                <h6>| Best Deal</h6>
                                <h2>Find Your Best Deal Right Now!</h2>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="tabs-content">
                                <div className="row">
                                    <div className="nav-wrapper "></div>
                                    <div className="tab-content" id="myTabContent">
                                        <div
                                            className="tab-pane fade show active"
                                            id="appartment"
                                            role="tabpanel"
                                            aria-labelledby="appartment-tab"
                                        >
                                            <div className="row">
                                                <div className="col-lg-3"></div>
                                                <div className="col-lg-6">
                                                    <img
                                                        src="assets/images/american-public-power-association-VuR4oHZ3ucc-unsplash.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="col-lg-3">
                                                    <h4>Extra Info About Servo Transformers</h4>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                        do eiusmod tempor pack incididunt ut labore et dolore
                                                        magna aliqua quised ipsum suspendisse.
                                                        <br />
                                                        <br />
                                                        When you need free CSS templates, you can simply type
                                                        TemplateMo in any search engine website. In addition,
                                                        you can type TemplateMo Portfolio, TemplateMo One Page
                                                        Layouts, etc.
                                                    </p>
                                                    <div className="icon-button">
                                                        <a href="property-details.html">
                                                            <i className="fa fa-phone" /> Contact us
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="villa"
                                            role="tabpanel"
                                            aria-labelledby="villa-tab"
                                        >
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <div className="info-table">
                                                        {/* <ul>
                          <li>Total Flat Space <span>250 m2</span></li>
                          <li>Floor number <span>26th</span></li>
                          <li>Number of rooms <span>5</span></li>
                          <li>Parking Available <span>Yes</span></li>
                          <li>Payment Process <span>Bank</span></li>
                        </ul> */}
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <img src="assets/images/deal-02.jpg" alt="" />
                                                </div>
                                                <div className="col-lg-3">
                                                    <h4>Detail Info</h4>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                        do eiusmod tempor pack incididunt ut labore et dolore
                                                        magna aliqua quised ipsum suspendisse. <br />
                                                        <br />
                                                        Swag fanny pack lyft blog twee. JOMO ethical copper mug,
                                                        succulents typewriter shaman DIY kitsch twee taiyaki
                                                        fixie hella venmo after messenger poutine next level
                                                        humblebrag swag franzen.
                                                    </p>
                                                    <div className="icon-button">
                                                        <a href="property-details.html">
                                                            <i className="fa fa-calendar" /> Schedule a visit
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="penthouse"
                                            role="tabpanel"
                                            aria-labelledby="penthouse-tab"
                                        >
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <div className="info-table">
                                                        <ul>
                                                            <li>
                                                                Total Flat Space <span>320 m2</span>
                                                            </li>
                                                            <li>
                                                                Floor number <span>34th</span>
                                                            </li>
                                                            <li>
                                                                Number of rooms <span>6</span>
                                                            </li>
                                                            <li>
                                                                Parking Available <span>Yes</span>
                                                            </li>
                                                            <li>
                                                                Payment Process <span>Bank</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <img src="assets/images/deal-03.jpg" alt="" />
                                                </div>
                                                <div className="col-lg-3">
                                                    <h4>Extra Info About Penthouse</h4>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                        do eiusmod tempor pack incididunt ut labore et dolore
                                                        magna aliqua quised ipsum suspendisse. <br />
                                                        <br />
                                                        Swag fanny pack lyft blog twee. JOMO ethical copper mug,
                                                        succulents typewriter shaman DIY kitsch twee taiyaki
                                                        fixie hella venmo after messenger poutine next level
                                                        humblebrag swag franzen.
                                                    </p>
                                                    <div className="icon-button">
                                                        <a href="property-details.html">
                                                            <i className="fa fa-calendar" /> Schedule a visit
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="properties section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-4">
                            <div className="section-heading text-center">
                                <h6>| Products</h6>
                                <h2>Our Products</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="item">
                                <a href="property-details.html">
                                    <img src="assets/images/C1.png" alt="" />
                                </a>
                                {/* <span class="category">Luxury Villa</span>
            <h6>$2.264.000</h6> */}
                                <h4>
                                    <a href="property-details.html">
                                        Single Phase Automatic Voltage Stabilizer
                                    </a>
                                </h4>
                                <ul>
                                    <li>
                                        Type: <span>Automatic Stabilizers</span>
                                    </li>
                                    <li>
                                        Voltage Range: <span>90-280 VAC</span>
                                    </li>
                                    <li>
                                        Output: <span>200-240 VAC</span>
                                    </li>
                                    <li>
                                        Controller: <span>Microprocessor Based</span>
                                    </li>
                                    <li>
                                        Display: <span>Input, Output, Load</span>
                                    </li>
                                    <li>
                                        Protection:{" "}
                                        <span>Overload, Delay Line, High Voltage/Low Voltage</span>
                                    </li>
                                    <li>
                                        Winding Material: <span>Copper/Aluminum</span>
                                    </li>
                                    <li>
                                        Capacity:<span>1 KVA TO 15 KVA</span>
                                    </li>
                                </ul>
                                <div className="main-button">
                                    <a href="property-details.html">Book Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="item">
                                <a href="property-details.html">
                                    <img src="assets/images/C1.png" alt="" />
                                </a>
                                {/* <span class="category">Luxury Villa</span>
            <h6>$2.264.000</h6> */}
                                <h4>
                                    <a href="property-details.html">
                                        Single Phase Automatic Voltage Stabilizer
                                    </a>
                                </h4>
                                <ul>
                                    <li>
                                        Type: <span>Automatic Stabilizers</span>
                                    </li>
                                    <li>
                                        Voltage Range: <span>90-280 VAC</span>
                                    </li>
                                    <li>
                                        Output: <span>200-240 VAC</span>
                                    </li>
                                    <li>
                                        Controller: <span>Microprocessor Based</span>
                                    </li>
                                    <li>
                                        Display: <span>Input, Output, Load</span>
                                    </li>
                                    <li>
                                        Protection:{" "}
                                        <span>Overload, Delay Line, High Voltage/Low Voltage</span>
                                    </li>
                                    <li>
                                        Winding Material: <span>Copper/Aluminum</span>
                                    </li>
                                    <li>
                                        Capacity:<span>1 KVA TO 15 KVA</span>
                                    </li>
                                </ul>
                                <div className="main-button">
                                    <a href="property-details.html">Book Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="item">
                                <a href="property-details.html">
                                    <img src="assets/images/B1.png" height="225px" alt="" />
                                </a>
                                {/* <span class="category">Luxury Villa</span>
            <h6>$2.264.000</h6> */}
                                <h4>
                                    <a href="property-details.html">
                                        Single Phase Automatic Voltage Stabilizer
                                    </a>
                                </h4>
                                <ul>
                                    <li>
                                        Type: <span>Automatic Stabilizers</span>
                                    </li>
                                    <li>
                                        Voltage Range: <span>90-280 VAC</span>
                                    </li>
                                    <li>
                                        Output: <span>200-240 VAC</span>
                                    </li>
                                    <li>
                                        Controller: <span>Microprocessor Based</span>
                                    </li>
                                    <li>
                                        Display: <span>Input, Output, Load</span>
                                    </li>
                                    <li>
                                        Protection:{" "}
                                        <span>Overload, Delay Line, High Voltage/Low Voltage</span>
                                    </li>
                                    <li>
                                        Winding Material: <span>Copper/Aluminum</span>
                                    </li>
                                    <li>
                                        Capacity:<span>1 KVA TO 15 KVA</span>
                                    </li>
                                </ul>
                                <div className="main-button">
                                    <a href="property-details.html">Book Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="item">
                                <a href="property-details.html">
                                    <img src="assets/images/C1.png" alt="" />
                                </a>
                                {/* <span class="category">Luxury Villa</span>
            <h6>$2.264.000</h6> */}
                                <h4>
                                    <a href="property-details.html">
                                        Single Phase Automatic Voltage Stabilizer
                                    </a>
                                </h4>
                                <ul>
                                    <li>
                                        Type: <span>Automatic Stabilizers</span>
                                    </li>
                                    <li>
                                        Voltage Range: <span>90-280 VAC</span>
                                    </li>
                                    <li>
                                        Output: <span>200-240 VAC</span>
                                    </li>
                                    <li>
                                        Controller: <span>Microprocessor Based</span>
                                    </li>
                                    <li>
                                        Display: <span>Input, Output, Load</span>
                                    </li>
                                    <li>
                                        Protection:{" "}
                                        <span>Overload, Delay Line, High Voltage/Low Voltage</span>
                                    </li>
                                    <li>
                                        Winding Material: <span>Copper/Aluminum</span>
                                    </li>
                                    <li>
                                        Capacity:<span>1 KVA TO 15 KVA</span>
                                    </li>
                                </ul>
                                <div className="main-button">
                                    <a href="property-details.html">Book Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="item">
                                <a href="property-details.html">
                                    <img src="assets/images/B1.png" height="225px" alt="" />
                                </a>
                                {/* <span class="category">Luxury Villa</span>
            <h6>$2.264.000</h6> */}
                                <h4>
                                    <a href="property-details.html">
                                        Single Phase Automatic Voltage Stabilizer
                                    </a>
                                </h4>
                                <ul>
                                    <li>
                                        Type: <span>Automatic Stabilizers</span>
                                    </li>
                                    <li>
                                        Voltage Range: <span>90-280 VAC</span>
                                    </li>
                                    <li>
                                        Output: <span>200-240 VAC</span>
                                    </li>
                                    <li>
                                        Controller: <span>Microprocessor Based</span>
                                    </li>
                                    <li>
                                        Display: <span>Input, Output, Load</span>
                                    </li>
                                    <li>
                                        Protection:{" "}
                                        <span>Overload, Delay Line, High Voltage/Low Voltage</span>
                                    </li>
                                    <li>
                                        Winding Material: <span>Copper/Aluminum</span>
                                    </li>
                                    <li>
                                        Capacity:<span>1 KVA TO 15 KVA</span>
                                    </li>
                                </ul>
                                <div className="main-button">
                                    <a href="property-details.html">Book Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="item">
                                <a href="property-details.html">
                                    <img src="assets/images/B1.png" height="225px" alt="" />
                                </a>
                                {/* <span class="category">Luxury Villa</span>
            <h6>$2.264.000</h6> */}
                                <h4>
                                    <a href="property-details.html">
                                        Single Phase Automatic Voltage Stabilizer
                                    </a>
                                </h4>
                                <ul>
                                    <li>
                                        Type: <span>Automatic Stabilizers</span>
                                    </li>
                                    <li>
                                        Voltage Range: <span>90-280 VAC</span>
                                    </li>
                                    <li>
                                        Output: <span>200-240 VAC</span>
                                    </li>
                                    <li>
                                        Controller: <span>Microprocessor Based</span>
                                    </li>
                                    <li>
                                        Display: <span>Input, Output, Load</span>
                                    </li>
                                    <li>
                                        Protection:{" "}
                                        <span>Overload, Delay Line, High Voltage/Low Voltage</span>
                                    </li>
                                    <li>
                                        Winding Material: <span>Copper/Aluminum</span>
                                    </li>
                                    <li>
                                        Capacity:<span>1 KVA TO 15 KVA</span>
                                    </li>
                                </ul>
                                <div className="main-button">
                                    <a href="property-details.html">Book Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="item">
                                <a href="property-details.html">
                                    <img src="assets/images/B1.png" height="225px" alt="" />
                                </a>
                                {/* <span class="category">Luxury Villa</span>
            <h6>$2.264.000</h6> */}
                                <h4>
                                    <a href="property-details.html">
                                        Single Phase Automatic Voltage Stabilizer
                                    </a>
                                </h4>
                                <ul>
                                    <li>
                                        Type: <span>Automatic Stabilizers</span>
                                    </li>
                                    <li>
                                        Voltage Range: <span>90-280 VAC</span>
                                    </li>
                                    <li>
                                        Output: <span>200-240 VAC</span>
                                    </li>
                                    <li>
                                        Controller: <span>Microprocessor Based</span>
                                    </li>
                                    <li>
                                        Display: <span>Input, Output, Load</span>
                                    </li>
                                    <li>
                                        Protection:{" "}
                                        <span>Overload, Delay Line, High Voltage/Low Voltage</span>
                                    </li>
                                    <li>
                                        Winding Material: <span>Copper/Aluminum</span>
                                    </li>
                                    <li>
                                        Capacity:<span>1 KVA TO 15 KVA</span>
                                    </li>
                                </ul>
                                <div className="main-button">
                                    <a href="property-details.html">Book Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="item">
                                <a href="property-details.html">
                                    <img src="assets/images/B1.png" height="225px" alt="" />
                                </a>
                                {/* <span class="category">Luxury Villa</span>
            <h6>$2.264.000</h6> */}
                                <h4>
                                    <a href="property-details.html">
                                        Single Phase Automatic Voltage Stabilizer
                                    </a>
                                </h4>
                                <ul>
                                    <li>
                                        Type: <span>Automatic Stabilizers</span>
                                    </li>
                                    <li>
                                        Voltage Range: <span>90-280 VAC</span>
                                    </li>
                                    <li>
                                        Output: <span>200-240 VAC</span>
                                    </li>
                                    <li>
                                        Controller: <span>Microprocessor Based</span>
                                    </li>
                                    <li>
                                        Display: <span>Input, Output, Load</span>
                                    </li>
                                    <li>
                                        Protection:{" "}
                                        <span>Overload, Delay Line, High Voltage/Low Voltage</span>
                                    </li>
                                    <li>
                                        Winding Material: <span>Copper/Aluminum</span>
                                    </li>
                                    <li>
                                        Capacity:<span>1 KVA TO 15 KVA</span>
                                    </li>
                                </ul>
                                <div className="main-button">
                                    <a href="property-details.html">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-4">
                            <div className="section-heading text-center">
                                <h6>| Contact Us</h6>
                                <h2>Get In Touch</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div id="map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.689310470688!2d74.79112917486978!3d34.000513220461485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18e08600e77d1%3A0xd2728e5f440cd47d!2sChinar%20Electrical%20Industries!5e0!3m2!1sen!2sin!4v1704176552959!5m2!1sen!2sin"
                                    width="100%"
                                    height="500px"
                                    frameBorder={0}
                                    style={{
                                        border: 0,
                                        borderRadius: 10,
                                        boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.15)"
                                    }}
                                    allowFullScreen=""
                                />
                                {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth"
              width="100%" height="500px" frameborder="0"
              style="border:0; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);"
              allowfullscreen=""></iframe> */}
                            </div>
                            <div className="row">
                                <div className="col-md-12  ">
                                    <div className="item py-5">
                                        <img
                                            src="assets/images/phone-icon.png"
                                            alt=""
                                            style={{ maxWidth: 52 }}
                                        />
                                        <h6>
                                            +919906707077
                                            <br />
                                            <span>Phone Number</span>
                                        </h6>
                                    </div>
                                </div>
                                <div className="col-md-12 mt-4 ">
                                    <div className="item py-5 ">
                                        <img
                                            src="assets/images/email-icon.png"
                                            alt=""
                                            style={{ maxWidth: 52 }}
                                        />
                                        <h6>
                                            {" "}
                                            chinarelectricals@gmail.com
                                            <br /> <span>Business Email</span>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <form id="contact-form" action="" method="post">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <label htmlFor="name">Full Name</label>
                                            <input
                                                type="name"
                                                name="name"
                                                id="name"
                                                placeholder="Your Name..."
                                                autoComplete="on"
                                                required=""
                                            />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <label htmlFor="email">Email Address</label>
                                            <input
                                                type="text"
                                                name="email"
                                                id="email"
                                                pattern="[^ @]*@[^ @]*"
                                                placeholder="Your E-mail..."
                                                required=""
                                            />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <label htmlFor="subject">Subject</label>
                                            <input
                                                type="subject"
                                                name="subject"
                                                id="subject"
                                                placeholder="Subject..."
                                                autoComplete="on"
                                            />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <label htmlFor="message">Message</label>
                                            <textarea
                                                name="message"
                                                id="message"
                                                placeholder="Your Message"
                                                defaultValue={""}
                                            />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <button
                                                type="submit"
                                                id="form-submit"
                                                className="orange-button"
                                            >
                                                Send Message
                                            </button>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Body