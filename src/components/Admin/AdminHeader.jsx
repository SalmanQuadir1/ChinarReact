import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { removeUser } from '../../utils/userSlice';

const AdminHeader = ({ handleSidebar }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.user);

    const handleLogout = () => {
        dispatch(removeUser());
        navigate("/logout")



    }

    return (
        <header className="header-area header-sticky shadow-sm">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            <Link className='mt-4 pt-2 mx-5' onClick={handleSidebar}><i className="fa-solid fa-bars-staggered fa-2x  switch_sidebar"></i></Link>
                            {/* <Link to={"/admin"} className="logo ">
                                <img src="./assets/images/Logo.png" alt="Logo_image" />

                            </Link>
                            <div className="d-flex gap-2 heading pointer">
                                <h4 className="">Chinar</h4>
                                <h4> Electrical</h4>
                                <h4>Industries</h4>


                            </div> */}

                            <ul className="nav">
                                <li><Link to="/admin" className="active">Home</Link></li>
                                <li><Link ><i className="fa fa-circle-user"></i> {user?.user?.username}</Link></li>
                                <li><Link onClick={handleLogout}><i className="fa fa-sign-out"></i> Log Out</Link></li>
                            </ul>


                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default AdminHeader