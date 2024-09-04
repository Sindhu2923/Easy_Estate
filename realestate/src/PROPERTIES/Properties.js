import React from 'react';
import { Container, Row, Col,InputGroup,Button, Form, Card} from 'react-bootstrap';
import './Properties.css';
import { useState,useEffect} from 'react';
import {useNavigate} from 'react-router';
import Footer from '../FOOTER/Footer';
import Title from '../HEADER/Title';
import axios from "axios";


const Properties = () => {
const [residencies,setresidencies]=useState([]);  
const [filteredResidencies, setFilteredResidencies] = useState([]);
useEffect(()=>{
axios.get("https://easy-estate-backend.onrender.com/properties/array").then((res)=>{
  setresidencies(res.data.entiredata);
  setFilteredResidencies(res.data.entiredata);
})
},[])


  const handleChange = (e) => {
    const query = e.target.value;
    setFilteredResidencies(
      residencies.filter((index) =>index.title && index.title.toLowerCase().includes(query.toLowerCase()))
    );
  };

       
const navigate=useNavigate();

const handleclick=(objectid)=>{
    navigate(`/Houses/${objectid}`);
}

  return (
    <div>
        <Title />
        <Container fluid  className='mt-5'>
            <Row className='justify-content-center' >
                <Col  xs={12} sm={8} md={6} lg={4}>
                <InputGroup >
                <Form.Control
                placeholder='search the residencies' 
                aria-label='residencies name'
                className='custom-input border-2 border-dark'
                type='text'
                onChange={handleChange}
                />
                <Button variant='outline-warning' className='custom-button border-2 border-dark'>search</Button>
                </InputGroup>
                </Col>
            </Row>

            <>
            <Row className='mt-5'>
            {filteredResidencies.map((cards) => (
                     <Col xs={12} sm={6} md={4} lg={3}  className='d-flex justify-content-center'>
                     <Card style={{width:'15rem'}} className='mt-5' id="custom-card" onClick={()=>handleclick(cards._id)}>
                         <Card.Img variant='top'  src={cards.imageurl} className='img-fluid'/>
                         <Card.Body className='text-center'>
                             <Card.Title  style={{fontFamily: "Alegreya SC, serif"}} id="title-color">
                             {cards.title}
                             </Card.Title>
                             <Card.Text  style={{ fontFamily: "Balthazar, serif"}} id="text-color">
                             {cards.description}
                             </Card.Text>
                         </Card.Body>
                     </Card>
                  
                </Col>
                ))}
            </Row>  
            </>
            <Footer/>
        </Container>
    </div>
  )
}

export default Properties
