import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';
import Btnsuccess from './Btnsuccess';
import axios from "axios";
const Parentcomponent = ({progress,onNextStep}) => {
  const[title,settitle] = useState(0);
  const[description,setdescription] = useState(0);
  const[price,setprice] = useState(0);

  const navigate = useNavigate();
  const handletitle = (e)=>{
    settitle(e.target.value);
  }
  const handledescription = (e)=>{
    setdescription(e.target.value);
  }
  const handleprice = (e)=>{
    setprice(e.target.value);
  }
  const handleNextStep = (e) => {
    e.preventDefault();
   const formvalue=e.currentTarget;
   if(formvalue.checkValidity()===true)
    {
      axios.post("https://easy-estate-backend.onrender.com/properties/title",{
        title,description,price,
      })
      onNextStep();
      navigate('/facility');
    }
  };
 
  return (
    <div> 
      <Btnsuccess progress={progress} />
      <Row>
        <Col className='d-flex justify-content-center mt-5'>
          <Form onSubmit={handleNextStep}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control type='text' style={{ width: 400 }} required onChange={handletitle}/>
              <Form.Label>Description</Form.Label>
              <Form.Control as='textarea' rows={3} style={{ width: 400 }} required onChange={handledescription}/>
              <Form.Label>Price</Form.Label>
              <Form.Control type='text' style={{ width: 400 }} required minLength={4} onChange={handleprice}/>
            </Form.Group>
            <Col className='text-center mt-5'>
            <Button
             id='button-color'
             style={{ fontFamily: 'Balthazar, serif' }}
             type='submit'
            >
            Next Step
            </Button>
            </Col>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Parentcomponent;
