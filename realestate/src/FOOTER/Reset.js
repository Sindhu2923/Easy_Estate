import axios from 'axios'
import React, { useState } from 'react'
import {Form,Col,Row, Button} from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';

const Reset = () => {
    const [newpassword,setnewpassword]=useState("");
    const [confirmpass,setconfirmpass]=useState("");
    const navigate = useNavigate();
    const {token} = useParams();
    const handlechange1=(e)=>{
        setnewpassword(e.target.value);
    }
    const handlechange2=(e)=>{
        setconfirmpass(e.target.value);
    }
   const handleclick=(event)=>{
        event.preventDefault();
        const form = event.currentTarget;
        if(form.checkValidity()===true){
            axios.post("https://easy-estate-backend.onrender.com/Properties/Confirm",{
                confirmpass,token
            }).then((res)=>{
                if(res.data.err)
                {
                    alert("not valid");
                }
                else{
                    navigate("/");
                }
            })
        }
    }
    
  return (
    <div>
        <div>
            <video autoPlay muted loop className='opacity-100' id="video-reset">
                <source
                src='https://videos.pexels.com/video-files/5152378/5152378-sd_640_360_24fps.mp4'
                allowFullScreen
                type='video/mp4'
                />
            </video>
        </div>
        <Row>
        <Form onSubmit={handleclick} id="align-reset">
        <Form.Group as={Row} className='d-flex justify-content-center'>
                <Form.Label column xs='3' sm='2' lg='2' style={{fontFamily: "Alegreya SC, serif"}} className='text-light' >New Password</Form.Label>
                <Col xs='8' sm='6' md='5' lg='3'>
                <Form.Control type='password' required onChange={handlechange1} />
                </Col> 
        </Form.Group>
        <br></br>
        <Form.Group as={Row} className='d-flex justify-content-center'>
                <Form.Label column xs='3' sm='2' lg='2' style={{fontFamily: "Alegreya SC, serif"}} className='text-light'>Confirm Password</Form.Label>
                <Col xs='8' sm='6' md='5' lg='3'>
                <Form.Control type='password' required onChange={handlechange2} />
                </Col> 
        </Form.Group >
            
            <Form.Group className='d-flex justify-content-center mt-lg-5'>
            <Button type='submit' style={{fontFamily: "Alegreya SC, serif"}} id="button-border1">SEND</Button>
            </Form.Group>
        </Form>
        </Row>
    </div>
  )
}

export default Reset