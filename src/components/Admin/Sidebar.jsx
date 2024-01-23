import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className='text-center'>
                <img src="./assets/images/Logo.png" className='mx-5 w-50' alt="Logo_image" />
                <h4 className="text-white sidebar_logo mx-auto my-3">Chinar</h4>
            </div>

            <Link to="/admin" className="active" >Dashboard</Link>
            <Link to="/admin/addProduct" >Add Product</Link>
            <Link to="/admin/viewproducts">View Products </Link>
            <Link to="/admin/addcategory">Categories</Link>
            <Link to="/admin/viewproducts">Blogs</Link>
        </div>
    )
}

export default Sidebar