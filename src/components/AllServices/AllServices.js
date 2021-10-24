import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import toast from 'react-hot-toast';
import AllSingleService from '../AllSingleService/AllSingleService';

const AllServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const url =
      'https://raw.githubusercontent.com/farhan-nahid/router-task/main/src/allServices.json';

    axios
      .get(url)
      .then((res) => setServices(res.data))
      .catch((err) => toast.error('Something Went Wrong!!'));
  }, []);

  return (
    <Container className='my-5'>
      <h1 className='text-center fw-bold'>Our All Service</h1>
      {services.length ? (
        <Row className='mt-5 g-4'>
          {
            // map services data
            services.map((service) => (
              <AllSingleService key={service.id} service={service} />
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
