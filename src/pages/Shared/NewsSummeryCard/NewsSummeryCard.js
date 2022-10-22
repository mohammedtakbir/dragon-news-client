import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummeryCard = ({ news }) => {
    
    const { title, _id, total_view, author, details, image_url, rating } = news;
    return (
        <div>
            <Card className="mb-5">
                <Card.Header className='py-3'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex'>
                            <Image src={author?.img} style={{ height: '50px' }} roundedCircle></Image>
                            <div className='ms-3'>
                                <h5>{author?.name}</h5>
                                <p className='mb-0'>{author?.published_date}</p>
                            </div>
                        </div>
                        <div>
                            <span className='me-2'><FaRegBookmark /></span>
                            <FaShareAlt />
                        </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details.length > 250 ?
                            <span>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link></span> : details
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='mb-0'>
                            <span style={{color: 'gold', fontSize: '20px'}} className='me-2'><FaStar /></span>
                            <span>{rating.number}</span>
                        </p>
                        <p className='mb-0'>
                            <span className='me-2'><FaEye /></span>
                            <span>{total_view}</span>
                        </p>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummeryCard;