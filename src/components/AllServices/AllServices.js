import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import ServiceCard from '../ServiceCard/ServiceCard';

const AllServices = () => {
  const [services] = useServices();

  return (
    <Container className='my-5'>
      <h1 className='text-center fw-bold'>Our All Service</h1>
      {services.length ? (
        <Row className='mt-5 g-4'>
          {
            // map services data
            services.map((service) => (
              <ServiceCard key={service.id} service={service} lg='4' md='6' />
            ))
          }
        </Row>
      ) : (
        <div className='d-flex mt-5 pt-5 justify-content-center'>
          <Spinner animation='border' />
        </div>
      )}
    </Container>
  );
};

export default AllServices;
