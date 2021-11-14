import React from 'react';
import './AdminDashboard.css';
import useAuth from '../../../hooks/useAuth';
import { NavLink } from 'react-router-dom';

const AdminDashboard = () => {

    const { logOut } = useAuth();

    return (
        <div className="user-dashboard">
        <div>
           <div className="d-flex flex-column p-3 text-white bg-dark" style={{width: "400px",height:"950px"}}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-4">Dialz Admin Dashboard</span>
            </a>
            <hr/>
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                <a href="/dashboard" className="nav-link active">
                    Dashboard
                </a>
                </li>
                <li>
                <a href="/manage-all-order" className="nav-link text-white">
                    Manage All Order
                </a>
                </li>
                <li>
                <a href="/add-product" className="nav-link text-white">
                    Add Products
                </a>
                </li>
                <li>
                <a href="/add-admin" className="nav-link text-white">
                    Add Admin
                </a>
                </li>
                <li>
                <a href="/manage-products" className="nav-link text-white">
                    Manage Products
                </a>
                </li>
                <li>
                <NavLink to='/login' >
                    <button onClick={logOut} className=" button-design btn mx-2 fw-bold text-decoration-none text-dark bg-light border border-light"> Log Out</button> </NavLink>
                </li>
            
            </ul>
            </div> 
        </div>
        </div>
    );
};

export default AdminDashboard;