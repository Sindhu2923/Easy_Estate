import React, { useState } from 'react';
import { Form, Row, Col, Button,Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Upload.css';
import Btnsuccess from './Btnsuccess';
import axios from 'axios';

const Upload = ({ progress, onNextStep }) => {
  const [url, setUrl] = useState(null);
  const navigate = useNavigate();

  const handleNextStep = (e) => {
    e.preventDefault();
    const formvalue = e.currentTarget;
    if (formvalue.checkValidity() === true) {
      axios.post("https://easy-estate-backend.onrender.com/properties/imageurl",{
        url,
      });
      onNextStep();
      navigate('/parentcomponent');
    }
  };

  const handlefile= async (e) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('https://easy-estate-backend.onrender.com/upload', {
        method: 'POST',
        body: formData,
      });

      const { imageUrl } = await response.json();
      setUrl(imageUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

   


  return (
    <div>
      <Btnsuccess progress={progress} />
      <Row>
        <Col id='upload-grid' className='d-flex justify-content-center'>
          <Form onSubmit={handleNextStep}>
            <Form.Group>
              <h2 id='h1-grid' style={{ fontFamily: 'Alegreya SC, serif' }}>
                Upload Your Own Property Image
              </h2>
              <br />
              <br />
              <Form.Label style={{ fontFamily: 'Balthazar, serif' }}>
                Upload Your Own Property Image
              </Form.Label>
              <Form.Control type='file' onChange={handlefile} required />
              <div className='d-flex justify-content-center mt-5'>
                {url && <Image fluid src={url} id='upload-image' />}
              </div>
              <Col className='text-center mt-5'>
                <Button
                  id='button-color'
                  style={{ fontFamily: 'Balthazar, serif' }}
                  type='submit'
                >
                  Next Step
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Upload;
