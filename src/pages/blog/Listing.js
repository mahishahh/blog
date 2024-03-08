import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BlogArticles from '../../data/Data';

export default function Listing() {
    const [data, setData] = useState([...BlogArticles]);

    const renderData = () => {
        return data.map((article, index) => (
            <Col key={index} xs={12} sm={6} md={3} lg={4} style={{ padding: '10px' }}>
                <Card className="mb-4" style={{ height: '100%' }}>
                    <Link to={`/article/${article.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Card.Img variant="top" src={article.imageUrl} />
                        <Card.Header>
                            <h6><b><Card.Text className="mb-2">{article.category}</Card.Text></b></h6>
                        </Card.Header>
                        <div className="card-body">
                            <h5 style={{ fontSize: '1.25rem' }}>{article.title}</h5>
                            <p style={{ color: '#B3B3B3', fontSize: '0.9rem' }}>{article.details}</p>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                                <span>{article.authorname}</span>
                                <span>{article.postedon}</span>
                            </div>
                        </div>
                    </Link>
                </Card>
            </Col>
        ));
    };

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card style={{ height: '100%' }}>
                            <Row>
                                <Col xs={12} sm={6} md={8}>
                                    <Card.Img variant="top" src='https://geeks-react.netlify.app/static/media/blogpost-3.08def44b3b2603bd3985.jpg' />
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                    <Card.Body>
                                        <Link to={`/article/1`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <Card.Title className="mb-2">Getting started the Web App JavaScript in 2020</Card.Title>
                                        </Link>
                                        <Card.Text className="mb-2">Debitis ipsam ratione molestias dolores qui asperiores consequatur facilis error.</Card.Text>
                                        <Card.Text className="mb-1">Dustin Warren </Card.Text>
                                        <Card.Text className="mb-1">September 13,2020</Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    {renderData()}
                </Row>
            </Container>
        </div>
    );
}
