import { faMoneyBill, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './HomeSingleService.css';

const HomeSingleService = ({ service: { img, title, description, price } }) => {
  return (
    <Col lg={6} md={12} sm={12} xs={12}>
      <Card className='service__card shadow rounded'>
        <Card.Img variant='top' src={img} />
        <Card.Body className='text-center'>
          <Card.Title as='h5' className='fw-bold'>
            {title}
          </Card.Title>

          <Card.Text>{description}</Card.Text>
          <Card.Text as='h5'>
            <FontAwesomeIcon icon={faMoneyBill} /> {price} ৳
          </Card.Text>
          <Button variant='primary'>
            Enroll Now <FontAwesomeIcon icon={faShoppingCart} />
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default HomeSingleService;
