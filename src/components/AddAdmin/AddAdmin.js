import React from 'react';
import './AddAdmin.css';
import axios from 'axios';
import { useForm } from "react-hook-form";

const AddAdmin = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        axios.post('https://secure-ridge-11118.herokuapp.com/add-admin', data)
        .then(res =>{
            alert('Added Successfully');
            reset();
        })
    }

    return (
        <div className="text-center" style={{marginTop:"80px", marginBottom:"50px"}}>
        <div className="">
            <h1 className="text-success">Add Admin</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-2">
                <input className="mx-2 border-2 border-black p-2" type="email" placeholder="Admin Email" {...register("email")} />
                    <input className="mx-2 btn btn-outline-dark" type="submit" />
                </div>
            </form>
        </div>    
    </div>
    );
};

export default AddAdmin;