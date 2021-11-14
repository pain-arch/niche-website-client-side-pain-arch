import './Products.css';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://secure-ridge-11118.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])


    return (
        <div style={{marginTop:"70px"}}>
            <div className="my-5">
                <Container>
                    <div className="text-center">
                    <h1 className="my-5 page-title">Products</h1>
                    </div>
                    <Row xs={1} md={3} className="g-5 mx-3">
                        {products.map( service => (
                            <Col key={service._id}>
                                <Card className="card-design">
                                    <Card.Img className="w-100 mx-auto p-3" variant="top" src={service.img} />
                                    <Card.Body>
                                    <Card.Title className="fs-2 title-design">{service.name}</Card.Title>
                                    <Card.Text>
                                        {service.basicdiscription}
                                    </Card.Text>
                                    <div className="d-flex mb-3 text-center">
                                        <Card.Title >Price: $ {service.price}</Card.Title>
                                    </div>
                                    <div>
                                        <p>{service.description}</p>
                                    </div>
                                    <Link to={`/place-order/${service._id}`} className="text-center">
                                         <Button className="btn btn-dark mx-auto" variant="dark">Purchase</Button>
                                    </Link>    
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Products;