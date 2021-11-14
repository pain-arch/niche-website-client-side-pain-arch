import React from 'react';
import './Review.css';
import axios from 'axios';
import { useForm } from "react-hook-form";

const Review = () => {


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        axios.post('https://secure-ridge-11118.herokuapp.com/reviews', data)
        .then(res =>{
            alert('Added Successfully');
            reset();
        })
    }


    return (
        <div className="text-center" style={{marginTop:"80px", marginBottom:"50px"}}>
        <div className="">
            <h1 className="text-success">Add Reviews</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="mx-2 border-2 border-black p-2" placeholder="name" {...register("name")} />
                <input className="mx-2 border-2 border-black p-2" placeholder="image" {...register("img")} />
                <input className="mx-2 border-2 border-black p-2" placeholder="Rating" name="quantity" min="1" max="5" type="number" {...register("rating")} />
                <div className="mt-2">
                    <textarea className="mx-2 border-2 border-black p-5" type="text" placeholder="description" {...register("description")} />
                    <input className="mx-2 btn btn-outline-dark" type="submit" />
                </div>
            </form>
        </div>    
    </div>
    );
};

export default Review;