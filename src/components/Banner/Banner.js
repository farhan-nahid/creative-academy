import React from 'react';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import first from '../../images/slider1.png';
import second from '../../images/slider2.png';
import './Banner.css';

const Banner = () => {
  return (
    <Carousel className='bg-light'>
      <Carousel.Item>
        <Container>
          <Row className='my-5 py-5 g-5'>
            <Col md={7} sm={12} xs={12}>
              <h3 className='banner__heading'>Development is our Goal Ever</h3>
              <p>
                We are a boutique digital transformation consultancy and
                software development company.
              </p>
              <Button variant='primary'> Start Free Trail</Button>
            </Col>
            <Col md={5} sm={12} xs={12}>
              <img className='banner__image' src={first} alt='First slide' />
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container>
          <Row className='my-5 py-5 g-5'>
            <Col md={7} sm={12} xs={12}>
              <h3 className='banner__heading'>Development is our Goal Ever</h3>
              <p>
                We are a boutique digital transformation consultancy and
                software development company.
              </p>
              <Button variant='primary'> Start Free Trail</Button>
            </Col>
            <Col md={5} sm={12} xs={12}>
              <img className='banner__image' src={second} alt='Second slide' />
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
