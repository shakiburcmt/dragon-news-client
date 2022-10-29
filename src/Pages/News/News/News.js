import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import useTitle from '../../../hooks/useTitle';

const News = () => {
    const news = useLoaderData();
    useTitle('Details')
    const { title, author, details, rating, image_url, category_id } = news;
    return (
        <div>
            <Card className='mb-2'>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="primary">All news in this category</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;