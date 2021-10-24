import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const AllSingleService = ({ service: { img, title, description } }) => {
  return (
    <Col lg={4} md={6} sm={12}>
      <Card className='service__card shadow rounded'>
        <Card.Img variant='top' src={img} />
        <Card.Body className='text-center'>
          <Card.Title as='h5' className='fw-bold'>
            {title}
          </Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant='primary'>Buy Now</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default AllSingleService;
