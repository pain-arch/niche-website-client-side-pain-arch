import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './ShowReviews.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ShowReviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://secure-ridge-11118.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))   
    }, [])
    

    return (
        <div>
            <Container className="my-5">
            <h1 className="text-center" >Reviews</h1>
            <div className="row">
                {
                    reviews.map(review =>
                        <div key={review.name} className="col-sm-6 g-3">
                            <div className="card border border-warning border-2">
                            <div className="card-body">
                                <img src={review.img} className="mt-2 card-img-top w-25 h-50 rounded-circle mx-auto" alt="" />
                                <h5 className="card-title">{review.name}</h5>
                                <p className="card-text">{review.description}</p>
                                {
                                   parseInt(review.rating) === 5 ? 
                                   (<div>
                                   <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    </div>
                                    ):
                                    parseInt(review.rating) === 4 ?
                                    (<div>
                                        <FontAwesomeIcon icon={faStar} />
                                         <FontAwesomeIcon icon={faStar} />
                                         <FontAwesomeIcon icon={faStar} />
                                         <FontAwesomeIcon icon={faStar} />
                                         </div>
                                    ):
                                    parseInt(review.rating) === 3 ?
                                    (<div>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            </div>
                                    ):
                                    parseInt(review.rating) === 2 ?
                                    (<div>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            </div>
                                    ):
                                    parseInt(review.rating) === 1 ?
                                    (<div>
                                            <FontAwesomeIcon icon={faStar} />
                                            </div>
                                    ): ''
                                         
                                }
                            </div>
                            </div>
                        </div>
                        
                        
                        
                        )
                }
            </div>
            </Container>           
        </div>
    );
};

export default ShowReviews;