import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Fragments/Footer'
import AdminHeader from './AdminHeader'
import Sidebar from './Sidebar'

const AdminLayout = () => {
    const [toggleSidebar, setToggleSidebar] = useState(true);
    const [classname, setClassName] = useState('col-md-10')
    const handleSidebar = () => {
        if (!toggleSidebar) {
            setClassName("col-md-12")
            setToggleSidebar(!toggleSidebar);
        }

    }
    return (
        <div>
            <div className='row'>
                {toggleSidebar && <div className='col-md-2'>
                    <Sidebar />
                </div>}
                <div className={classname}>
                    <AdminHeader handleSidebar={handleSidebar} />

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