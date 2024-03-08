import parse from 'html-react-parser';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import BlogArticles from '../../data/Data';

// Component to display an article
export default function Article() {
    const { id } = useParams();
    const article = BlogArticles.find(a => a.id == id);

    if (!article) {
        return <div>Article not found</div>;
    }

    return (
        <Container>
            <h1>{article.title}</h1>
            {parse(article.content)}
        </Container>
    );
}
