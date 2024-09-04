import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Form,InputGroup,Button,Stack,Spinner} from "react-bootstrap";
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Hometext.css";
const Hometext = () => {
  const [count1,setcount1]=useState(5000);
  const [count2,setcount2]=useState(200);
  const [count3,setcount3]=useState(5000);
  const navigate=useNavigate();

  const handlechange=(e)=>{
    const value=e.target.value;
    const upper = value.toLowerCase();
    if(upper=="ourvalue")
      {
      navigate('/ourvalue');
      }
    else if(upper=="residencies")
      {
        navigate('/residencies')
      }
      else if(upper=="contactus")
        {
          navigate('/contact')
        }
      else if(upper=="addproperty")
        {
          navigate('/success');
        }
  };

  useEffect(()=>{
    if(count1<10000)
    {
    setcount1(count1+1);
    }
    if(count1<10000)
    {
    setcount2(count2+1);
    }
    if(count3<10000)
    {
    setcount3(count3+1);
    }
  });
  return (
  <Container fluid  id="bgcolorforhomepage">
    <Row >
        <Col xs={12} sm={6}>
        <div className='m-5'>
        <p className='display-4'><span style={{fontFamily: "Protest Strike, sans-serif"}}>Discover
        <Spinner animation="grow" variant="warning"  style={{ position: 'absolute', marginLeft: '-5px', marginTop: '-10px' }}/>
        <br></br>Most Suitable<br></br>Property</span></p>
        <br></br> 
        <small>
          
          <span><em><strong>Find a variety of properties that suit you very easily</strong></em></span>
          <br></br>
          <span><em><strong>Forg  et all difficulties in finding a residence for you</strong></em></span>
      
        </small>
        <br></br>
        <br></br>

          <InputGroup>
          <Form.Control type='text' placeholder='search Residencies' onChange={handlechange}/>
          <Button variant='outline-warning' type='button'>Search</Button>
          </InputGroup>
          <br></br>    
          <br></br>
          <Stack direction='horizontal' gap={3} id='overflow'>
          <h2>{count1} <span id='plus1'>+</span></h2>
          <h2>{count2} <span id='plus2'>+</span></h2>
          <h2>{count3} <span id='plus3'>+</span></h2>
          </Stack>  
          <Stack direction='horizontal' gap={3} id='text'>
            <small>Premium Products</small>
            <small>Happy Customers</small>
            <small>Awards Winning</small>
          </Stack>
        </div>
        </Col>
      

        <Col xs={12} sm={6}>
        <img src='https://images.unsplash.com/photo-1673551798110-674cece466cf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
        className='img-fluid mt-3 border border-secondary border-4' id='homeimage'/>
        </Col>
        
    
    </Row>
  </Container>
   
  )
}

export default Hometext