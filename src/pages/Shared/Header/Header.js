import React from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
    const { user, userSignOut } = useContext(AuthContext);
    const handleSignOut = () => {
        userSignOut()
            .then(() => { })
            .catch(err => console.error(err))
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='mb-4'>
                <Container>
                    <Navbar.Brand>
                        <Link to='/' className='text-decoration-none fw-semibold h3'>Dragon News</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">All News</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            {user?.uid ?
                                <>
                                    <Nav.Link onClick={handleSignOut} className='text-decoration-none'>Log Out</Nav.Link>
                                    <Nav.Link>
                                        {user?.displayName}
                                    </Nav.Link>
                                    <Link to='/profile'>
                                        {user?.photoURL ? <Image roundedCircle style={{ height: '30px' }} src={user?.photoURL}></Image> : <FaUserAlt />}
                                    </Link>
                                </>
                                :
                                <>
                                    <Link to='/signup' className='text-decoration-none me-3'>Sign Up</Link>
                                    <Link to='/login' className='text-decoration-none'>Log In</Link>
                                </>
                            }
                        </Nav>
                        <div className='d-lg-none'>
                            <LeftSideNav />
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;