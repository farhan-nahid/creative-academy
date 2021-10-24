import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container className='my-5 p-5 border rounded shadow'>
      <h3 className='text-center fw-bold mb-3'>Get In Touch</h3>
      <p className='text-center'>
        Please fill the form. Our team will contact you.
      </p>
      <Form className='mt-5'>
        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
          </Form.Group>

          <Form.Group as={Col} controlId='formGridPhone'>
            <Form.Label>Phone</Form.Label>
            <Form.Control type='phone' placeholder='Phone Number' />
          </Form.Group>
        </Row>

        <Form.Group className='mb-3' controlId='formGridAddress1'>
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder='Your Address' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formMassage'>
          <Form.Label>Your Massage</Form.Label>
          <Form.Control
            as='textarea'
            placeholder='Leave a massage here'
            style={{ height: '100px' }}
          />
        </Form.Group>

        <Form.Group className='mb-3' id='formGridCheckbox'>
          <Form.Check type='checkbox' label='I am not a Robot' />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
