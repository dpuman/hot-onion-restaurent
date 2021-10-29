import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Nav, Button, Card } from 'react-bootstrap';

import './food-items.css';
import meals from '../../fakeData/fakeData'
import { Link } from 'react-router-dom';

const FoodItems = () => {
    const [category, setCategory] = useState('breakfast');
    const [foods, setFoods] = useState([])

    useEffect(() => {
        const allFoods = meals.filter(fd => fd.type.toLowerCase() === category.toLowerCase());
        setFoods(allFoods);
    }, [category])


    return (
        <div>
            <Nav className="justify-content-center mt-3" variant="tabs">
                <Nav.Item>
                    <Nav.Link Active onClick={() => {

                        setCategory('breakfast');
                    }} >Breakfast</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => {

                        setCategory('lunch');
                    }} >Lunch</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => {

                        setCategory('dinner');
                    }} >Dinner</Nav.Link>
                </Nav.Item>
            </Nav>





            <div className="row justify-content-center  mx-auto" style={{ width: '95%', padding: '50px 40px 50px 150px' }}>

                {
                    foods.map(br =>

                        <div className="col-md-4 justify-content-center" key={br.id}>
                            <div>
                                <Card className=" effect " style={{ width: '20vw', border: 'none' }}>
                                    <Link to={`/foodDetails/${br.id}`} style={{ textDecoration: 'none' }}>
                                        <div>
                                            <Card.Img variant="top" src={br.images} />
                                            <Card.Body className="text-center text-dark">
                                                <Card.Title>{br.name}</Card.Title>
                                                <Card.Text>
                                                    {br.shortDescription}
                                                    <br />
                                                    <strong>${br.price}</strong>

                                                </Card.Text>
                                            </Card.Body>
                                        </div>
                                    </Link>


                                </Card> <br />
                            </div>
                        </div>
                    )

                }
                <br />
                <Button variant="secondary" style={{ width: '50%' }} className="disabled mt-5 me-5">Check Out Your Food</Button>
            </div>




        </div>
    );
};

export default FoodItems;