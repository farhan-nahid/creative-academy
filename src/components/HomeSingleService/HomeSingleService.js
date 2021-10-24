import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './HomeSingleService.css';

const HomeSingleService = ({ service: { id, img, title, description } }) => {
  return (
    <Col md={6} sm={12}>
      <Card className='service__card shadow rounded'>
        <Card.Img variant='top' src={img} />
        <Card.Body>
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

export default HomeSingleService;
