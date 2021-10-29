import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import whyUs from '../../fakeData/whyUs';



const WhyUs = () => {
    return (
        <div>
            <div className="col-md-4 m-5 text-left">
                <h1>Why you choose us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores is, ullam qui  non hic sequi cum aliquam tempora! Voluptatibus deserunt ipsum harum vel dolor aut, voluptatem obcaecati!</p>
            </div>
            <div className="d-flex text-left m-5 " style={{ align: "center" }}>
                {
                    whyUs.map((why) => <Card style={{ boxShadow: '10px 10px 10px lightGrey', width: '28rem', borderRadius: '15px', border: 'none' }} key={why.id} className="m-5 effect " >
                        <Card.Img className='p-2' variant="top" src={why.image} />
                        <Card.Body className="d-flex align-self-start">
                            <Col xs={6} md={4} className="mr-2">
                                <Image src={why.icon} roundedCircle />
                            </Col>
                            <Card.Title>{why.title}</Card.Title>
                        </Card.Body>
                        <Card.Text className="p-5">
                            {why.description}  <br /> <br />
                            <Link to="/" style={{ textDecoration: 'none' }}>See more </Link>
                        </Card.Text>


                    </Card>)
                }
            </div>
        </div>


    );
};

export default WhyUs;