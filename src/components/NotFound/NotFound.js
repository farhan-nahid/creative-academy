import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const history = useHistory();

  return (
    <div className='not__found'>
      <h1>404</h1>
      <p>Page Not Found</p>
      <Button variant='primary' onClick={() => history.goBack()}>
        <FontAwesomeIcon icon={faArrowLeft} /> Go back
      </Button>
    </div>
  );
};

export default NotFound;
