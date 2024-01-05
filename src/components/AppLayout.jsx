import React from 'react'
import Header from './Fragments/Header'
import SubHeader from './Fragments/SubHeader'
import Footer from './Fragments/Footer'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {

    return (
        <>
            <SubHeader />
            <Header />
            <Outlet />


        </>
    )
}

export default AppLayout