import React, { useState }  from 'react';
import { Container, Row, Col, Card, Button, Spinner, Offcanvas, OffcanvasHeader, OffcanvasTitle, OffcanvasBody} from 'react-bootstrap';
import './Footer.css'


const Footer = () => {
 const [show,setshow]=useState(false);
 const handleshow=()=>{
  setshow(true);
 }
 const handleclose=()=>{
  setshow(false);
 }
  return (
    <>
    <Container fluid id="footercard">
        <Row>
            <Col xs={12} >
            <Card className='text-center border-2' id="cardcolor">
                <Card.Body>
                <Card.Title>
                    <h1 style={{fontFamily: "Racing Sans One, sans-serif"}} id='h1t'>Get started with Homyz</h1>
                </Card.Title>
                <Card.Text style={{ fontFamily: "Balthazar, serif"}} >
                    <em>Subscribe and find super attractive price from us
                    <br></br>
                    Find your residence soon</em>
                </Card.Text>
                <Button  style={{fontFamily: "Alegreya SC, serif"}} variant='outline-warning' onClick={handleshow}>
                    Get started
                </Button>
                </Card.Body>
            </Card>
            </Col>
            </Row>
            </Container>

           <Row>
            <Col>
              <Offcanvas show={show} onHide={handleclose} backdrop="static" keyboard={false} >
                <OffcanvasHeader closeButton>
                  <OffcanvasTitle >
                    <div id='newH2'>
                    <h2 style={{fontFamily: "Racing Sans One, sans-serif"}}>SIGN UP</h2>
                    </div>
                  </OffcanvasTitle>
                </OffcanvasHeader>
                <OffcanvasBody>
                 <p className='fst-italic fw-semibold' id='login-color'>If you want to interact with us ? Then you have to signin first! and
                   Then you join as a member of our website and starded making profit to your own properties or buy some properties of our client.</p>
                <div id="siginup-button">
                <Button style={{fontFamily: "Alegreya SC, serif"}} id='sigin-button' className='fw-semibold' href='/signup'>SIGNUP</Button>
                </div>
                <div id="login_button">
                <Button style={{fontFamily: "Alegreya SC, serif"}}  className='fw-semibold' id="login-button" href='/login'>LOGIN</Button>
                </div>
                </OffcanvasBody>
                
              </Offcanvas>
            </Col>
           </Row>

    <Container fluid>
      <Row>
        <Col xs={12} lg={12}>
          <Card className='mt-5'>
            <Card.Body>
              <Row>
                <Col lg={6} xs={12} md={6}>
        
                  <h1 id='h1c' style={{ fontFamily: "Racing Sans One, sans-serif" }}>
                    Homyz <Spinner animation='grow' variant='warning'/>
                    </h1>
                    
                  <br></br>
                  <em style={{ fontFamily: "Balthazar, serif" }} className='fs-5'>our vision is to make all people <br></br> live their best
                  <br></br>
                  State:Tamil Nadu
                  <br></br>
                  City:Coimbatore is Coimbaturing!
                  <br></br>
                  Providing 
                  <br></br>
                  We give the best Blog
                  <br></br>
                  No.1
                  </em>
                </Col>
                <Col lg={6} xs={12} md={6} className='text-lg-end'>
                  <h1 id='h1c' style={{ fontFamily: "Racing Sans One, sans-serif" }}>Information</h1>
                  <br></br>
                  <em style={{ fontFamily: "Balthazar, serif" }} className='fs-5'>155 new york,FL 4637, USA<br></br> live their best 
                  <br></br>
                  Personal Location
                  <br></br>
                  Country:India
                  <br></br>
                  Seamless Service
                  <br></br>
                  User Centric experience 
                  <br></br>Immediate Respoonse 
                  </em>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>


     
 

    </>
  )
}

export default Footer