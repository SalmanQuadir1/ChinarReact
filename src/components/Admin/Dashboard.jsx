import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (

        <div className='wrapper'>
            <div className='card_section'>
                <Link to="/admin/viewproducts"><div className='box text-center'><p className='pt-5 text-white'>Products</p><h4 className='p-2 text-white'>08</h4></div></Link>
                {/* <div className='box text-center'><p className='p-5 text-white'>Orders</p></div> */}
                <Link to="/admin/addcategory"><div className='box text-center'><p className='pt-5 text-white'>Categories</p><h4 className='p-2 text-white'>08</h4></div></Link>
                <div className='box text-center'><p className='p-5 text-white'>Blogs</p></div>
            </div>


        </div>


    )
}

export default Dashboard