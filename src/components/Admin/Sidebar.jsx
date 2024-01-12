import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to="/admin" className="active" >Dashboard</Link>
            <Link to="/admin/addProduct">Products
                <ul className='d-none'>
                    <li><Link to="/admin/addProduct">Add Product</Link></li>
                    <li><Link to="/admin/addProduct">View Products</Link></li>
                </ul>
            </Link>

            <Link to="#about">Categories</Link>
            <Link to="#contact">Blogs</Link>
        </div>
    )
}

export default Sidebar