// import node module libraries
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, Form, Button, Image } from 'react-bootstrap';


const ForgetPassword = () => {
    return (
        <Fragment>
            <Row className="align-items-center justify-content-center g-0 min-vh-100">
                <Col lg={5} md={5} className="py-8 py-xl-0">
                    <Card>
                        <Card.Body className="p-6">
                            <div className="mb-4"><h1 className="mb-1 fw-bold">Forgot Password</h1>
                                <span>Fill the form to reset your password.</span>
                            </div>
                            <Form>
                                <Row>
                                    <Col lg={12} md={12} className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" id="email" placeholder="Enter your email" required />
                                    </Col>
                                    <Col lg={12} md={12} className="mb-3 d-grid gap-2">
                                        <Button variant="primary" type="submit">
                                            Send Reset Link
                                        </Button>
                                    </Col>
                                </Row>
                                <span>
                                    Return to <Link to="/signin">Sign in</Link>
                                </span>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default ForgetPassword;
