import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useServices from '../../hooks/useServices';

const ServiceDetails = () => {
  const { id } = useParams();
  const [services] = useServices();
  const selectedService = services.find((service) => service.id === Number(id));

  return (
    <Container className='my-5 py-5'>
      <Card className='service__card shadow rounded my-5 w-50 mx-auto'>
        <Card.Img variant='top' src={selectedService?.img} />
        <Card.Body className='text-center'>
          <Card.Title as='h5' className='fw-bold'>
            {selectedService?.title}
          </Card.Title>
          <Card.Text>{selectedService?.description}</Card.Text>
          <Card.Text as='h5'>
            <FontAwesomeIcon icon={faMoneyBill} /> {selectedService?.price} ৳
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ServiceDetails;
