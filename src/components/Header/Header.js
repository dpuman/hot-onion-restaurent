
import { Cart3, CartFill } from 'react-bootstrap-icons';
import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import './Header.css'



import logo from '../../assets/logo2.png'

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">


                <Container fluid>
                    <Navbar.Brand href="#"><img style={{ width: "160px" }} src={logo} alt='Logo' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className="justify-content-end" id="navbarScroll">

                        <div className="">
                            <Nav
                                className="ms-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action2"><span style={{ 'color': 'red' }}>0</span> <CartFill color="black" size={20} /></Nav.Link>
                                <Nav.Link href="#action2"><Button size="sm" variant="primary">Login</Button></Nav.Link>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="background">
                <h1 style={{ marginLeft: '28vw', paddingTop: '20vh', marginBottom: '5vh', fontSize: '350%' }}>Best Food for your hungry tummy!!</h1>
                <input type="search" className=" focus" style={{ borderRadius: '30px', width: '30vw', padding: '8px', marginLeft: '35vw', zIndex: '-1', border: 'none', height: '6vh' }} placeholder="Search food items" />
                <Button variant="danger" style={{ borderRadius: '30px', padding: '9px', width: '6vw', marginLeft: '-3vw', height: '6vh' }}>Search</Button>
            </div>
        </div>
    );
};

export default Header;