import React, { useState } from 'react';
import {Form,Row,Col,Container, Button,Alert} from 'react-bootstrap';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './Footer.css';
const Signup = () => {
    const [name,setname]=useState();
    const [email,setemail]=useState();
    const [password,setpassword]=useState();
    const [alert,setalert]=useState({show:false,message:""});
    const navigate=useNavigate();

    const handlename=(e)=>{
        setname(e.target.value);
    }

    const handleemail=(e)=>{
        setemail(e.target.value);
    }

    const handlepassword=(e)=>{
        setpassword(e.target.value);
    }

    const handlesubmit=(e)=>{
      e.preventDefault();
      const formvalue=e.currentTarget;
      if(formvalue.checkValidity()===true)
        {
            axios.post("https://easy-estate-backend.onrender.com/userdetails/signup",{
                name,email,password
            }).then((res)=>{
                if(res.data.id==2)
                    {
                        const token = res.data.token;
                        sessionStorage.setItem("token",token);
                        navigate(`/home/${email}`);
                        
                    }
                    else
                    {
                       setalert({message:res.data.message,show:true});
                    }
            })
        }
    }


  return (
    <div>
        {alert.show && <Alert variant='danger' dismissible><Alert.Heading className='text-center fst-italic'>{alert.message}</Alert.Heading></Alert>}
        <Container fluid>
        <Row>
        <Col>
        <div>
       <video className='opacity-100' autoPlay loop muted id='video'>
       <source 
        src='https://videos.pexels.com/video-files/9669050/9669050-sd_640_360_25fps.mp4'
        allowFullScreen
        type='video/mp4'
        />
        </video>
        </div>

       
        <div id='align'>
        <Form onSubmit={handlesubmit}>
            <Form.Group id='form' as={Row}>
                <Form.Label column xs='3' sm='2' lg='1' id="vedio" style={{fontFamily: "Alegreya SC, serif"}} className='text-light'>Name</Form.Label>
                <Col xs='8' sm='6' md='5' lg='3'>
                <Form.Control type='text' onChange={handlename} required />
                </Col> 
            </Form.Group>
            <br/>
            <Form.Group id='form' as={Row}>
                <Form.Label column xs='3' sm='2' lg='1' style={{fontFamily: "Alegreya SC, serif"}} className='text-light'>Email</Form.Label>
                <Col xs='8' sm='6' md='5' lg='3'>
                <Form.Control type='email'  onChange={handleemail} required />
                </Col> 
            </Form.Group>
            <br/>
            <Form.Group id='form' as={Row}>
                <Form.Label column xs='3' sm='2' lg='1' style={{fontFamily: "Alegreya SC, serif"}} className='text-light'>Password</Form.Label>
                <Col xs='8' sm='6' md='5' lg='3'>
                <Form.Control type='password'  onChange={handlepassword} required minLength={8} />
                </Col> 
            </Form.Group>
            <br/>
            <br/>
            <Form.Group className='d-flex justify-content-center'>
                <Button 
                type='submit' 
                style={{fontFamily: "Alegreya SC, serif"}} 
                id='button-border'
                className='text-uppercase' 
                > Signup</Button>
            </Form.Group>
        </Form>
        </div>
       
        </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Signup