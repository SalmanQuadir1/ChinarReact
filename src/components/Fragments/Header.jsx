import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">

                            <Link to={"/"} className="logo ">
                                <img src="./assets/images/Logo.png" alt="Logo_image" />

                            </Link>
                            <div className="d-flex gap-2 heading pointer">
                                <h4 className="">Chinar</h4>
                                <h4> Electrical</h4>
                                <h4>Industries</h4>

                            </div>

                            <ul className="nav">
                                <li><Link to="/" className="active">Home</Link></li>
                                <li><Link to="/products">Products</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                                <li><Link to="/login"><i className="fa fa-sign-in"></i> Log in</Link></li>
                            </ul>
                            <a className='menu-trigger'>
                                <span>Menu</span>
                            </a>

                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header