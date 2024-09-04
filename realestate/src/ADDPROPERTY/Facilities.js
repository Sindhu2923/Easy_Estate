import React, { useState } from 'react';
import {Row,Col,Form,Button} from 'react-bootstrap';
import Btnsuccess from './Btnsuccess'; 
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const Facilities = ({progress,onNextStep}) => {
const[bedroom,setbedroom]=useState(0);
const[bathroom,setbathroom]=useState(0);
const[parking,setparking]=useState(0);
const[objectid,setobjectid]=useState(0);

const  navigate=useNavigate();
const handlebed=(e)=>{
  setbedroom(e.target.value);
}
const handlebath=(e)=>{
  setbathroom(e.target.value);
}
const handlepark=(e)=>{
  setparking(e.target.value);
}


const handleclick=(e)=>{
  let obj = 0;
  e.preventDefault();
  const formvalue=e.currentTarget;
  if(formvalue.checkValidity()===true)
  {
  axios.post("https://easy-estate-backend.onrender.com/properties/rooms",{
    bedroom,bathroom,parking,
  }).then((res)=>{
    obj = res.data.message;
    console.log(res.data.message)
    onNextStep();
    console.log(obj)
    navigate(`/Houses/${obj}`);
  })
  
  }
}

  return (
    <div>
        <Btnsuccess  progress={progress}/>
        <Row >
            <Col className='d-flex justify-content-center mt-5'>
            <Form onSubmit={handleclick}>
                <Form.Group>
                    <Form.Label>No.of BedRooms</Form.Label>
                    <Form.Control type='number' style={{width:400}} required onChange={handlebed} />
                    <Form.Label>No.of BathRooms</Form.Label>
                    <Form.Control type='number' style={{width:400}} required  onChange={handlebath}/>
                    <Form.Label>No.of Parkings</Form.Label>
                    <Form.Control type='number' style={{width:400}} required  onChange={handlepark}/>
                </Form.Group>
                <Col className='text-center mt-5'>
               <Button id="button-color" style={{ fontFamily: "Balthazar, serif" }} type='submit' >
                Next Step  
                </Button>
                </Col>  
            </Form>
            </Col>
        </Row>

    </div>
  )
}

export default Facilities