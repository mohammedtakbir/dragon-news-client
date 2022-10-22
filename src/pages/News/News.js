import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaEye } from 'react-icons/fa';

const News = () => {
    const news = useLoaderData();
    const { title, image_url, details, author, total_view, category_id } = news
    return (
        <Card>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{details}</Card.Text>
                <div className='d-flex justify-content-between my-4'>
                    <span><span className='fw-semibold'>Author:</span> {author.name}</span>
                    <span><span className='fw-semibold'>Published Date: </span> {author.published_date}</span>
                    <span>
                        <span className='me-2'><FaEye /></span>
                        <span>{total_view}</span>
                    </span>
                </div>
                <Link to={`/category/${category_id}`}>
                    <Button variant="primary">All news in the category</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default News;