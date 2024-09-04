import React from 'react'
import './Ourvalue.css'
import { Container,Row,Col,Card} from 'react-bootstrap'
import Title from '../HEADER/Title'
import Footer from '../FOOTER/Footer'
const Ourvalue = () => {
  return (
    <div>
        <Title/>

        <Container className='mt-5 mt-sm-5'>
            <Row>
                <Col xs={12} >
                <h1 className='text-center' style={{fontFamily: "Racing Sans One, sans-serif"}}>The Most Trusted Brand <span><i className="bi bi-house-heart" style={{color:'red'}}><span style={{fontFamily: 'Lora ,serif',color:'green'}} className='fw-bold'> Homyz</span></i></span> in recent days</h1>
                <h1 style={{fontFamily: "Racing Sans One, sans-serif"}} className='text-center'>We have been porviding best properties to customers </h1>
                <br></br>
                <h3 style={{fontFamily: "Racing Sans One, sans-serif"}} className='text-center'>Lets See Some reviews of Our Customers</h3>
                </Col>
            </Row>


            <Row>
                <Col xs={12} sm={12} md={6} className='d-flex justify-content-center mt-sm-5 mt-5'>
                <Card style={{width:'24rem'}} id="card-design">
                    <Card.Img  src='https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
                    <Card.Body>
                        <Card.Title style={{fontFamily: "Alegreya SC, serif"}}><h2 className='fw-bolder text-uppercase'>Review about Homyz</h2></Card.Title>
                        <Card.Text style={{ fontFamily: "Balthazar, serif"}} className='fs-4 fw-light'>I have been using this website for the past 6 months I purchased and selled many properties here. So this was trusted website and our team decided to buy another property here</Card.Text>
                        <Card.Subtitle className='fw-light text-end'>-Andriya</Card.Subtitle>
                    </Card.Body>
                </Card>
                </Col>
                <Col  xs={12} sm={12} md={6} className='d-flex justify-content-center mt-sm-5 mt-5'>
                <Card style={{width:'24rem'}} id="card-design">
                    <Card.Img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
                    <Card.Body>
                    <Card.Title style={{fontFamily: "Alegreya SC, serif"}}><h2 className='fw-bolder text-uppercase'>Review about Homyz</h2></Card.Title>
                    <Card.Text style={{ fontFamily: "Balthazar, serif"}} className='fs-4 fw-light'>I have been using this website for the past 6 months I purchased and selled many properties here. So this was trusted website and our team decided to buy another property here</Card.Text>
                    <Card.Subtitle className='fw-light text-end'>-Glenn</Card.Subtitle>
                    </Card.Body>
                </Card>
                </Col>
            </Row>



            <Row>
                <Col xs={12} sm={12} md={6} className='d-flex justify-content-center mt-sm-5 mt-5'>
                <Card style={{width:'24rem'}} id="card-design">
                    <Card.Img  src='https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
                    <Card.Body>
                        <Card.Title style={{fontFamily: "Alegreya SC, serif"}}><h2 className='fw-bolder text-uppercase'>Review about Homyz</h2></Card.Title>
                        <Card.Text style={{ fontFamily: "Balthazar, serif"}} className='fs-4 fw-light'>I have been using this website for the past 6 months I purchased and selled many properties here. So this was trusted website and our team decided to buy another property here</Card.Text>
                        <Card.Subtitle className='fw-light text-end'>-David Eiden</Card.Subtitle>
                    </Card.Body>
                </Card>
                </Col>
                <Col  xs={12} sm={12} md={6} className='d-flex justify-content-center mt-sm-5 mt-5'>
                <Card style={{width:'24rem'}} id="card-design">
                    <Card.Img src='https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
                    <Card.Body>
                    <Card.Title style={{fontFamily: "Alegreya SC, serif"}}><h2 className='fw-bolder text-uppercase'>Review about Homyz</h2></Card.Title>
                    <Card.Text style={{ fontFamily: "Balthazar, serif"}} className='fs-4 fw-light'>I have been using this website for the past 6 months I purchased and selled many properties here. So this was trusted website and our team decided to buy another property here</Card.Text>
                    <Card.Subtitle className='fw-light text-end'>-Angelina</Card.Subtitle>
                    </Card.Body>
                </Card>
                </Col>
            </Row>


            <Row>
                <Col xs={12} sm={12} md={6} className='d-flex justify-content-center mt-sm-5 mt-5'>
                <Card style={{width:'24rem'}} id="card-design">
                    <Card.Img  src='https://images.pexels.com/photos/3783516/pexels-photo-3783516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
                    <Card.Body>
                        <Card.Title style={{fontFamily: "Alegreya SC, serif"}}><h2 className='fw-bolder text-uppercase'>Review about Homyz</h2></Card.Title>
                        <Card.Text style={{ fontFamily: "Balthazar, serif"}} className='fs-4 fw-light'>I have been using this website for the past 6 months I purchased and selled many properties here. So this was trusted website and our team decided to buy another property here</Card.Text>
                        <Card.Subtitle className='fw-light text-end'>-Alexa</Card.Subtitle>
                    </Card.Body>
                </Card>
                </Col>
                <Col  xs={12} sm={12} md={6} className='d-flex justify-content-center mt-sm-5 mt-5'>
                <Card style={{width:'24rem'}} id="card-design">
                    <Card.Img src='https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
                    <Card.Body>
                    <Card.Title style={{fontFamily: "Alegreya SC, serif"}}><h2 className='fw-bolder text-uppercase'>Review about Homyz</h2></Card.Title>
                    <Card.Text style={{ fontFamily: "Balthazar, serif"}} className='fs-4 fw-light'>I have been using this website for the past 6 months I purchased and selled many properties here. So this was trusted website and our team decided to buy another property here</Card.Text>
                    <Card.Subtitle className='fw-light text-end'>-Joe Williams</Card.Subtitle>
                    </Card.Body>
                </Card>
                </Col>
            </Row>


        </Container>
        <Footer/>
        
    </div>
  )
}

export default Ourvalue