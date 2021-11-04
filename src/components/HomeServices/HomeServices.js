import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import serviceSection from '../../images/service-section.png';
import ServiceCard from '../ServiceCard/ServiceCard';

const HomeServices = () => {
  const [services] = useServices();
  const fourServices = services.slice(0, 4);

  return (
    <Container className='my-5'>
      <h1 className='text-center fw-bold '>Our Best Services</h1>
      <Row className='g-4 mt-5'>
        <Col md={5} sm={12} xs={12} className='d-flex align-items-center'>
          <img
            className='img-fluid'
            src={serviceSection}
            alt='serviceSection'
          />
        </Col>
        <Col md={7} sm={12} xs={12}>
          {fourServices.length ? (
            <Row className='g-4'>
              {
                // map services data
                fourServices.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    lg='6'
                    md='12'
                  />
                ))
              }
            </Row>
          ) : (
            <div className='d-flex mt-5 pt-5 justify-content-center'>
              <Spinner animation='border' />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default HomeServices;
