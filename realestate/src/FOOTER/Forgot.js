import axios from 'axios';
import React, { useState } from 'react'
import {Form,Col,Row, Button, Container, Alert} from 'react-bootstrap'
import "./Footer.css";
const Forgot = () => {
    const [email,setemail]=useState("");
    const [show,setshow]=useState(false);
    const handlechange=(e)=>{
        setemail(e.target.value);
    }
    const handleclick = (event)=>{
        event.preventDefault();
        const form = event.currentTarget;
        if(form.checkValidity()===true)
        {
            axios.post("https://easy-estate-backend.onrender.com/Properties/Forgot",{
                email,
            })
        }
    }

    const handlesend=()=>{
        setshow(true);
    }

  return (
    <div>
        <Container fluid>
        <Row>
        <Col>
        <div>
         <video className='opacity-100' autoPlay loop muted id='video-forgot'>
            <source 
            src='https://videos.pexels.com/video-files/2792370/2792370-hd_1920_1080_30fps.mp4'
            allowFullScreen
            type='video/mp4'
            />
         </video>
         {show && <Alert dismissible variant='success' style={{fontFamily: "Alegreya SC, serif"}} className='text-center fw-bold'>message sent to your email please verify</Alert>}
        </div>
        <div id="align-forgot">
        <Form onSubmit={handleclick} id="form-forgot">
        <Form.Group as={Row} className='d-flex justify-content-center' >
                <Form.Label column xs='2' sm='2' md='2' lg='1' style={{fontFamily: "Alegreya SC, serif"}} className='text-light' >Email</Form.Label>
                <Col xs='8' sm='6' md='6' lg='4'>
                <Form.Control type='email' required onChange={handlechange} />
                </Col> 
            </Form.Group>

            <br></br>

            <Form.Group className='d-flex justify-content-center'>
            <Button type='submit' onClick={handlesend}  style={{fontFamily: "Alegreya SC, serif"}} id="button-border1"> SEND</Button>
            </Form.Group>
            
        </Form>
        </div>
        </Col>
        </Row>
        </Container>
      
    </div>
  )
}

export default Forgot