import React from 'react';
import './AddProducts.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddProducts = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        axios.post('https://secure-ridge-11118.herokuapp.com/products', data)
        .then(res =>{
            alert('Added Successfully');
            reset();
        })
    }

    return (
        <div className="text-center" style={{marginTop:"80px", marginBottom:"50px"}}>
            <div className="">
                <h1 className="text-success">Add Products</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="mx-2 border-2 border-black p-2" placeholder="name" {...register("name")} />
                    <input className="mx-2 border-2 border-black p-2" placeholder="price" type="number" {...register("price")} />
                    <input className="mx-2 border-2 border-black p-2" placeholder="image" {...register("img")} />
                    <div className="mt-2">
                        <textarea className="mx-2 border-2 border-black p-5" type="text" placeholder="description" {...register("description")} />
                        <input className="mx-2 btn btn-outline-dark" type="submit" value="Add Product" />
                    </div>
                </form>
            </div>    
        </div>
    );
};

export default AddProducts;