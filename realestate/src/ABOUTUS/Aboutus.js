import React, { useState } from 'react'
import { Col,Row,Container, Button, Modal, Form} from 'react-bootstrap'
import './Aboutus.css'
import axios from 'axios';
import {useNavigate} from "react-router-dom";


const Aboutus = () => {
     
    const [show,setshow]=useState(false);
    const [shouldalert,setshouldalert]=useState(false);
    const [show1,setsshow1]=useState(false);
    const [emails,setemails]=useState("");
    const [text,settext]=useState("");
    const navigate = useNavigate();
    const token = sessionStorage.getItem("token");
    const handleclick=()=>{
        axios.post("https://easy-estate-backend.onrender.com/Properties/nodeemail",{
            token,
        }).then((res)=>{
            if(res.data.err)
            {
                navigate("/login");
            }
            else
            {
                setshow(true)
            }
        });
    }

    const handleclose=()=>{
        setshow(false)
    }

    const handlesecondclick=()=>{
        setsshow1(true);

    }

    const handleemail=(e)=>{
        setemails(e.target.value);
    }
     
    const handletext=(e)=>{
        settext(e.target.value);
    }
  
    const handlebothclick=(event)=>{
         event.preventDefault();
         const form = event.currentTarget;
         if(form.checkValidity()===true)
         {
            axios.post("https://easy-estate-backend.onrender.com/Properties/sendmail",{
                emails,text
            }).then((res)=>{
                if(res.data.message)
                {
                    setshow(false);
                    setshouldalert(true);
                }
            })
         }
        
    }
    
   const handleExited=()=>{
    if(shouldalert)
        {
            handlesecondclick();
            setshouldalert(false);
        }
   }



  return (
    <div>
    
        <Container>
            <Row>
                <Col className='d-flex justify-content-center mt-5' >
                 <Button size='lg' id="contact" style={{fontFamily: "Alegreya SC, serif"}} onClick={handleclick} >contact us</Button>
                 <Modal show={show} onHide={handleclose} keyboard={false} backdrop="static" onExited={handleExited}>
                 <Form onSubmit={handlebothclick}>
                    <Modal.Header closeButton>
                        <Modal.Title style={{fontFamily: "Alegreya SC, serif"}} className='fst-italic text-uppercase'>Contact Us</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                  
                    <Form.Group>
                        <Form.Label className='fst-italic'>Email Address</Form.Label>
                        <Form.Control
                        type='email'
                        placeholder='Enter your email'
                        required
                        onChange={handleemail}
                        />
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Form.Label className='fst-italic'>Explain Your Querries</Form.Label>
                        <Form.Control 
                        as="textarea" rows={3} placeholder={`What's the difficulty you have ?`}
                        required
                        onChange={handletext}
                        />
                    </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleclose} id="button1">close</Button>
                        <Button  id="button2"  type='submit'>Save Changes</Button>
                    </Modal.Footer> 
                    </Form>
                 </Modal>

                 <Modal show={show1} onHide={()=> setsshow1(false)} backdrop="static" keyboard={false}> 
                    <Modal.Header closeButton>
                        <Modal.Title style={{fontFamily: "Alegreya SC, serif"}} className='fst-italic text-uppercase'>Thank for your message</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p className='fst-italic'>We have been working on the problem right now surely we will short it out. we request you to stay tuned with our website for future updates</p>
                    </Modal.Body>
                 </Modal>
                </Col>  
            </Row>
        </Container>
    
    </div>
  )
}

export default Aboutus