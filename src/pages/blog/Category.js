import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import BlogArticles from '../../data/Data';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Category = () => {
    const [data, setData] = useState([]);
    const { category } = useParams();
    useEffect(() => {
        const filteredData = BlogArticles.filter(article => article.category === category);
        setData(filteredData);
    }, [category]);

    const renderData = () => {
        return data.map((article, index) => (
            <Col key={index} xs={12} sm={6} md={3} lg={4} style={{ padding: '10px' }}>
                <Card className="mb-4" style={{ height: '100%' }}>
                    <Link to={`/article/${article.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Card.Img variant="top" src={article.imageUrl} />
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
        <>
            <Container>
                <Row>
                    {renderData()}
                </Row>
            </Container>
        </>
    );
};

export default Category;