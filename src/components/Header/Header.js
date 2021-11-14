import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
import useAuth from '../../hooks/useAuth';
import logo from '../../assets/logo.png';

const Header = () => {

    const { logOut, user } = useAuth();

    return (
        <div>
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" className="navbar-design">
                <Container>
                <Navbar.Brand href="/" className="navbar-brand"><img className="logo-design w-50" src={logo} alt="logo" /></Navbar.Brand>
                <Navbar.Toggle style={{backgroundColor:"white"}} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        
                    </Nav>
                    <Nav>
                        <NavLink className="mx-2 fs-5 text-decoration-none text-light" to="/home">Home</NavLink>

                        {user.email &&
                        <div>
                        <NavLink className="mx-2 fs-5 text-decoration-none text-light" to="/dashboard">Dashboard</NavLink>
                        </div>
                        }
                        
                        <NavLink className="mx-2 fs-5 text-decoration-none text-light" to="/about-us">About Us</NavLink>
                        <NavLink className="mx-2 fs-5 text-decoration-none text-light" to="/products">Products</NavLink>


                        
                        
                        {user.email && <div> <p className="inline-block text-light mx-2">Signed in as:</p><p className='border-1 inline-block lg:mt-0 mr-2 rounded bg-white fw-bold text-teal-200 text-yellow-500 p-1 '>{user.displayName}</p></div>}
                        {user.email ?

                            <NavLink to='/login' >
                                <button onClick={logOut} className=" button-design btn mx-2 fw-bold text-decoration-none text-dark bg-light border border-light"> Log Out</button> </NavLink>


                            :
                            <NavLink to='/login' >
                                <button className=" button-design btn mx-2 fw-bold text-decoration-none text-dark bg-light border border-light" >Login</button> </NavLink>

                        }
                    </Nav>
                </Navbar.Collapse>
                </Container>
        </Navbar>
            
        </div>
    );
};

export default Header;