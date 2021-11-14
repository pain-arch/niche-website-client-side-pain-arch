import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Purchase.css';


const Purchase = () => {

    const {id} = useParams();
    const { user } = useAuth();


    const [service, setService] = useState({});
    useEffect( () => {
        fetch(`https://secure-ridge-11118.herokuapp.com/products/${id}`)
        .then(res => res.json() )
        .then(data => setService(data))
    },[]);


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{ 
        axios.post('https://secure-ridge-11118.herokuapp.com/placed-order', data)
        .then(res =>{
            alert('Added Successfully');
            reset();
        })
    };

    return (
        <div className="login-body" style={{paddingTop:'100px',paddingBottom:"30px"}}>
        <Container className="bg-light p-3" style={{textAlign:"center"}}>
            <h3>Place Order of <span style={{color:"green"}}>{service.name}</span> </h3>
            <p className="text-warning">**please click the Place Order Button Twice**</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="mx-2 border-2 border-black p-2" type="text" value={user.displayName} placeholder="customer name" {...register("name", { required: true})} />
                <input className="mx-2 border-2 border-black p-2" type="email" value={user.email} placeholder="email" {...register("email", { required: true})} />
                <input className="mx-2 border-2 border-black p-2" value={service.name} placeholder="service" {...register("service", { required: true})} />
                <div className="mt-2">
                    <input className="mx-2 border-2 border-black p-2" placeholder="Address" {...register("address", { required: true})} />
                    <input className="mx-2 border-2 border-black p-2" type="number" placeholder="Phone" {...register("phone", { required: true})} />
                </div>
                <div className="mt-2">
                    <input className="mx-2 btn btn-dark" type="submit" value="Place Order" />
                </div>
            </form>
        </Container>
    </div>
    );
};

export default Purchase;