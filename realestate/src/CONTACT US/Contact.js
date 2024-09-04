import React from 'react';
import './Contact.css';
import { Container, Row, Col, Card, Button,Image} from 'react-bootstrap';
const Contact = () => {
  return (
    <>
    <Container fluid className='mt-5'>
    <h1 style={{fontFamily: "Racing Sans One, sans-serif"}} className='ms-lg-5'>Our Contact us</h1>
    <h3 style={{fontFamily: "Racing Sans One, sans-serif"}} className='ms-lg-5'>Easy Conatact Us</h3>
    <p className='ms-lg-5'  style={{ fontFamily: "Balthazar, serif"}}>Navigating Current Market Trends in Real Estate
    Understanding shifts in buyer preferences 
     <br></br>
     Understanding shifts in buyer preferences and sustainability demands.
    </p>
       <Row>
        <Col xs={12} sm={4} md={3}>
          
        <Card style={{width: '12rem'}} className='mt-lg-5' id="card">
            <Card.Body>
                <Card.Title id='cardtcolor'  className='ms-4'  style={{fontFamily: "Alegreya SC, serif"}}>
                <i class="bi bi-telephone-fill" id="icon"></i> CALL
                <br></br>+91 999442211
                </Card.Title>
            <Button  className='ms-4 button-call fw-semibold'>CALL  NOW</Button>
            </Card.Body>
        </Card>
        </Col>
        
        <Col xs={12} sm={4} md={3} className='mt-3 mt-sm-0 ' >
        <Card style={{width: '12rem'}} className='mt-lg-5 ' id="card">
            <Card.Body>
                <Card.Title id='cardtcolor'  className='ms-4' style={{fontFamily: "Alegreya SC, serif"}}>
                <i class="bi bi-chat-text-fill"  id="icon"></i> CHAT
                <br></br>+91 999442211
                </Card.Title>
            <Button className='ms-4 button-chat  fw-semibold'>CALL  NOW</Button>
            </Card.Body>
        </Card>

        </Col>
        </Row>
       

        <Row>
        <Col xs={12} sm={4} md={3}>
        <Card style={{width: '12rem'}} className='mt-lg-5 mt-md-5 mt-3 mt-sm-0' id="card">
            <Card.Body>
                <Card.Title id='cardtcolor'  className='ms-4' style={{fontFamily: "Alegreya SC, serif"}}>
                <i class="bi bi-chat-left-dots-fill"  id="icon"></i> MESSAGE
                <br></br>+91 999442211
                </Card.Title>
            <Button className='ms-4 button-message  fw-semibold'>CALL  NOW</Button>
            </Card.Body>
        </Card>
        </Col>
        
        <Col xs={12} sm={4}  md={3} className='mt-3 mt-sm-0 mt-md-5'>
        <Card style={{width: '12rem'}} className='mt-lg-0' id="card">
            <Card.Body>
                <Card.Title id='cardtcolor'  className='ms-3' style={{fontFamily: "Alegreya SC, serif"}}>
                <i class="bi bi-camera-video-fill"  id="icon"></i> VEDIO CALL
                <br></br>+91 999442211
                </Card.Title>
            <Button className='ms-4 button-vc  fw-semibold'>CALL  NOW</Button>
            </Card.Body>
        </Card>
        </Col>
    
        <Col xs={6} sm={6} md={5} lg={5} className='ms-4 ms-sm-5 mt-5 mt-md-0'>
            <Image src='https://img.freepik.com/premium-photo/high-grey-house-large-family-with-grey-modern-house-exterior_124507-20633.jpg' className='img-fluid' id="contactimage" rounded/> 
        </Col>

        </Row>    
        </Container>
    </>
  )
}

export default Contact