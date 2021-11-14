import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './ManageAllOrders.css';

const ManageAllOrders = () => {


    const [orders, setOrders] =useState([]);

    useEffect(()=>{
        fetch('https://secure-ridge-11118.herokuapp.com/placed-order')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[]);

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
        <h1 style={{borderBottom:"3px solid #FFDE59", display:"inline-block"}} className="text-center" >Manage All Orders</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">Service</th>
                <th scope="col">email</th>  
                <th scope="col">Customer phone </th>
                <th scope="col">Status</th>
                <th scope="col">delete order</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders.map(order =>
                        <tr key={order._id}>
                            <td>{order.service}</td>
                            <td>{order.email}</td>
                            <td>{order.phone}</td>
                            <td><button className="btn btn-warning">pending</button></td>
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

export default ManageAllOrders;