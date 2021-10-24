import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import toast from 'react-hot-toast';
import serviceSection from '../../images/service-section.png';
import HomeSingleService from '../HomeSingleService/HomeSingleService';

const HomeServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const url =
      'https://raw.githubusercontent.com/farhan-nahid/router-task/main/src/homeServices.json';
    axios
      .get(url)
      .then((res) => setServices(res.data))
      .catch((err) => toast.error('Something Went Wrong!!'));
  }, []);

  return (
    <Container className='my-5'>
      <h1 className='text-center fw-bold '>Our Best Services</h1>
      <Row className='g-4 mt-5'>
        <Col md={6} sm={12} xs={12} className='d-flex align-items-center'>
          <img
            className='img-fluid'
            src={serviceSection}
            alt='serviceSection'
          />
        </Col>
        <Col md={6} sm={12} xs={12}>
          {services.length ? (
            <Row className='g-4'>
              {
                // map services data
                services.map((service) => (
                  <HomeSingleService key={service.id} service={service} />
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
