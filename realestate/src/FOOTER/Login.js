import React, { useState } from 'react'
import {Form,Row,Col,Container, Button, Alert} from 'react-bootstrap';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const [email,setemail]=useState();
    const [password,setpassword]=useState();
    const [error,seterror]=useState({show:false,message:""});


    const navigate=useNavigate();

    const handleemail=(e)=>{
        setemail(e.target.value);
    }

    const handlepassword=(e)=>{
        setpassword(e.target.value);
    }

   
    const handlesubmit=(e)=>{
        e.preventDefault();
        const value=e.currentTarget;
        if(value.checkValidity()===true)
            {
                axios.post("https://easy-estate-backend.onrender.com/userdetails/login",{
                    email,password
                }).then((res)=>{
                    if(res.data.id===3)
                        {
                            const token=res.data.token;
                            sessionStorage.setItem("token",token);
                            navigate(`/home/${email}`);
                        }
                    else
                    {
                        seterror({message:res.data.message,show:true});
                    }
                })
            }
    }
   
   

  return (
    <div>
    {error.show && <Alert variant='danger' dismissible><Alert.Heading className='text-center fst-italic'>{error.message}</Alert.Heading></Alert>}
    <Container fluid>
        <Row>
        <Col>
        <div>
       <video className='opacity-100' autoPlay loop muted id='video'>
       <source 
        src='https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4'
        allowFullScreen
        type='video/mp4'
        />
        </video>
        </div>

       
        <div id='align'>
        <Form onSubmit={handlesubmit}>
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
            <Form.Group className='d-flex justify-content-center'>
                <Button 
                type='submit' 
                style={{fontFamily: "Alegreya SC, serif"}} 
                id='button-border1'
                className='text-uppercase' 
                >Login</Button>
            </Form.Group>
            <br></br>
            <div className='d-flex justify-content-center'>
            <Link to="/forgot" style={{fontFamily: "Alegreya SC, serif"}} >Forgot Password ?</Link>
            </div>
            <br></br>
          {error.show && <Form.Group className='d-flex justify-content-center'>
                <Button 
                style={{fontFamily: "Alegreya SC, serif"}} 
                id='button-border1'
                className='text-uppercase'
                href='/signup' 
                >Signup</Button>
            </Form.Group>
          }
        </Form>
        </div>
       
        </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Login