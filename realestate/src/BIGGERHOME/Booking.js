import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Card, Stack} from "react-bootstrap";
import './Houses.css';
const Booking = () => {

    const [booked,setbooked]=useState([]);
    useEffect(()=>{
        const emailvalue=sessionStorage.getItem("p_name");
        axios.post("https://easy-estate-backend.onrender.com/Properties/emaildetail",{
            emailvalue,
          }).then((res)=>{
            setbooked(res.data.value);
        });
    },[]);
    console.log(booked);
    
    
  return (
    <div id="card-style" >
      <h1 style={{fontFamily: 'Kanit,sans-serif'}}  id='heading'> HERE IS YOUR BOOKED PROERTIES</h1>
      <div id="mt">
      <Stack  gap={5}>
      {booked && booked.map(item=>(
      <Card style={{ width: '18rem' }} id="card-bg">
      <Card.Header style={{fontFamily: 'Alegreya SC,serif'}} className='fw-bold'>{item.Residencyname}</Card.Header>
      <Card.Body>
      <Card.Text style={{fontFamily: 'Alegreya SC,serif'}}>
      {item.Bookeddate}
      </Card.Text>
      </Card.Body>
      </Card>
      ))}
      </Stack> 
      </div>
    </div>
  )
}

export default Booking

