import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {

    const {user} = useAuth();
    const userEmail = user.email;

    const [orders, setOrders] =useState([]);


    useEffect(()=>{
        fetch(`https://secure-ridge-11118.herokuapp.com/placed-order`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[]);

    const neworder = orders.filter(orderw => orderw.email === userEmail)

    //Delete 
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure ?');
        if (proceed) {
            const url = `https://secure-ridge-11118.herokuapp.com/placed-order/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            if (data.deletedCount > 0) {
               const remainingUsers = orders.filter(order => order._id !== id);
               setOrders(remainingUsers);
            }
        })
        }
    }

    return (
        <div className="login-body" style={{paddingTop:"50px", paddingBottom:"50px", marginTop:"150px",marginBottom:"65px"}}>
        <Container className="bg-light">
        <h1 style={{borderBottom:"3px solid #FFDE59", display:"inline-block"}} className="text-center" >My Orders</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">Product</th>
                <th scope="col">email</th>  
                <th scope="col">delete order</th>
                </tr>
            </thead>
            <tbody>
                {
                    neworder.map(order =>
                        <tr key={order._id}>
                            <td>{order.service}</td>
                            <td>{order.email}</td>
                            <td><button onClick={() => handleDelete(order._id)} className="btn btn-danger text-light">X</button> </td>
                        </tr>
                        )
                }
            </tbody>
            </table>
        </Container>
    </div>
    );
};

export default MyOrders;