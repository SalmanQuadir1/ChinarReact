import React from 'react'
import Header from '../Fragments/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Fragments/Footer'
import AdminHeader from './AdminHeader'
import Sidebar from './Sidebar'

const AdminLayout = () => {
    return (
        <div>
            <AdminHeader />
            <div className='row'>
                <div className='col-md-2'>
                    <Sidebar />
                </div>
                <div className='col-md-10'>

                    <Outlet />
                    <div className='container'>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLayout