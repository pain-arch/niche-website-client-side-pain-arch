import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import './Dashboard.css';
import UserDashboard from './UserDashboard/UserDashboard';


const Dashboard = () => {


    const [admin , setAdmin] = useState([]);

    const { user } = useAuth();

    useEffect(()=>{
        const url = 'https://secure-ridge-11118.herokuapp.com/add-admin';
        fetch(url)
        .then(res => res.json())
        .then(data => setAdmin(data))
    },[])

    const adminuser = admin.find(admin => admin.email === user.email);


    return (
        <div style={{marginTop: "75px"}}>

            {
               adminuser ?<AdminDashboard></AdminDashboard>:<UserDashboard></UserDashboard>
            }

       </div>
    );
};

export default Dashboard;