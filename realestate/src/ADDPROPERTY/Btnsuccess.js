import React from 'react'
import {Row,Col, ProgressBar} from 'react-bootstrap';
import './Btnsuccess.css';

const Btnsuccess = ({
  progress
}) => {

  return (
    <div>
        <Row className='mt-5'>
          <Col>
          <div className='d-flex justify-content-center' >
          <ProgressBar now={progress} label={`${progress}%` }  id='progressbar'  variant='primary' animated />
          </div>
          </Col>
        </Row>
    </div>
  
  )
}

export default Btnsuccess