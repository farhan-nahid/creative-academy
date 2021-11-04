import { faMoneyBill, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({
  service: { img, title, description, price, id },
  lg,
  md,
}) => {
  const history = useHistory();

  return (
    <Col lg={lg} md={md} sm={12} xs={12}>
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
          <Button
            variant='primary'
            onClick={() => history.push(`/details/${id}`)}
          >
            Enroll Now <FontAwesomeIcon icon={faShoppingCart} />
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ServiceCard;
