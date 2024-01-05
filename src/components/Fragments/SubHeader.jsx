import React from 'react'

const SubHeader = () => {
    return (
        <div className="sub-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8">
                        <ul className="info">
                            <li><i className="fa fa-envelope"></i> chinarelectricals@gmail.com</li>
                            {/* <li><i className="fa fa-map"></i> </li>  */}
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <ul className="social-links">
                            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                            <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubHeader