import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import aboutUs from '../../images/about-us.png';

const About = () => {
  return (
    <Container className='my-5 pt-5'>
      <Row className='g-4'>
        <Col md={6} sm={12} xs={12}>
          <img className='img-fluid' src={aboutUs} alt='about us' />
        </Col>
        <Col md={6} sm={12} xs={12} className='d-flex align-items-center'>
          <div>
            <h1 className='fw-bold mb-3'>
              Creative Team that Gets Excited About
            </h1>
            <p>
              Brotula California flyingfish bonytail chub redmouth whalefish
              cookiecutter shark whitebait zander basking shark Asiatic
              glassfish coolie loach sprat pelican gulper, archerfish loosejaw
              Blind goby. Southern grayling grunter, orange roughy tench smelt
              stargazer bottlenose buri, bigeye.
            </p>
            <Button variant='primary'>Explore More</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
