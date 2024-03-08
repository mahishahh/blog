import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, Form, Button, Image } from 'react-bootstrap';

const SignIn = () => {
    return (
        <Fragment>
            <Row className="align-items-center justify-content-center g-0 min-vh-100">
                <Col lg={5} md={5} className="py-8 py-xl-0">
                    <Card>
                        <Card.Body className="p-6">
                            <div className="mb-4">
                                <h1 className="mb-1 fw-bold" style={{ color: '#6A1B9A' }}>Sign in</h1>
                                <span >
                                    Don’t have an account?{' '}
                                    <Link to="/signup" className="ms-1" style={{ color: '#6A1B9A' }}>
                                        Sign up
                                    </Link>
                                </span>
                            </div>
                            <Form>
                                <Row>
                                    <Col lg={12} md={12} className="mb-3">
                                        <Form.Label style={{ color: '#6A1B9A' }}>Username or email </Form.Label>
                                        <Form.Control type="email" id="email" placeholder="Email address here" required />
                                    </Col>
                                    <Col lg={12} md={12} className="mb-3">
                                        <Form.Label style={{ color: '#6A1B9A' }}>Password </Form.Label>
                                        <Form.Control type="password" id="password" required />
                                    </Col>
                                    <Col lg={12} md={12} className="mb-3">
                                        <div className="d-md-flex justify-content-between align-items-center">
                                            <Form.Group className="mb-3 mb-md-0" controlId="formBasicCheckbox" style={{ color: '#6A1B9A' }}>
                                                <Form.Check type="checkbox" label="Remember me" />
                                            </Form.Group>
                                            <Link to="/password" style={{ color: '#6A1B9A' }}>
                                                Forgot your password?
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col lg={12} md={12} className="mb-0 d-grid gap-2">
                                        <Button colorScheme="light" style={{ backgroundColor: '#6A1B9A' }} type="submit">
                                            Sign in
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default SignIn;
