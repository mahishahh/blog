import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    const categories = [
        { label: 'Workshops', category: 'Workshop' },
        { label: 'Courses', category: 'Courses' },
        { label: 'Tutorials', category: 'Tutorial' },
        { label: 'Company', category: 'Company' },
    ];

    return (
        <Navbar expand="lg" colorScheme="light" style={{ backgroundColor: '#E9D1F3' }}>
            <Container>
                <Navbar.Brand style={{ fontWeight: 'bold', color: '#6A1B9A' }}>
                    Popular Blogs
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Item>
                            <Nav.Link eventKey="All" as={Link} to="/" style={{ fontWeight: 'bold', color: '#6A1B9A' }}>
                                All
                            </Nav.Link>
                        </Nav.Item>
                        {categories.map((category) => {
                            return (<Nav.Item>
                                <Nav.Link eventKey={category.category} as={Link}
                                    to={`/${category.category}`} style={{ fontWeight: 'bold', color: '#6A1B9A' }}>
                                    {category.label}
                                </Nav.Link>
                            </Nav.Item>)
                        })}
                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Item>
                            <Button href="/signin" variant="outline-light" style={{ backgroundColor: '#6A1B9A' }}>Sign In</Button>
                        </Nav.Item>
                        <Nav.Item>
                            <Button href="/signup" variant="outline-light" style={{ backgroundColor: '#6A1B9A' }}>Sign Up</Button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;