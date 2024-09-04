import React, { useEffect, useState } from 'react';
import { cardData } from './Popularimage';
import { Card,Row,Col, Stack } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Favorites = () => {
const [favo,setfavo]=useState([]);
const [favimage,setfavimage]=useState([]);
const emailvalue = sessionStorage.getItem("p_name");
const token = sessionStorage.getItem("token");
const navigate = useNavigate();

useEffect(()=>{
    axios.post("https://easy-estate-backend.onrender.com/Properties/favdisplay",{emailvalue,token}).then((res)=>{
        if(res.data.err){
            navigate("/login");
        }
        else 
        {
            setfavo(res.data.value);
            console.log(favo);
            const favoid = favo.map(element => element.id);
            setfavimage(cardData.filter(item => favoid.includes(item.id)));
        }
    })
});


  return (
    <div>
        <Row>
        <Col xs={12}>
        <h1 style={{fontFamily: 'Kanit,sans-serif'}}  id='heading-favo'> HERE IS YOUR LIKED PROERTIES </h1>
       {favimage.map((item)=>(
        <Card style={{ width: '18rem' }} id="favo-card">
        <Card.Img  src={item.imageSrc} />
            <Card.Body>
                <Card.Title style={{ fontFamily: "Racing Sans One, sans-serif" }}>
                    {item.title}
                </Card.Title>
                <Card.Text className='fst-italic'>
                    {item.content}
                </Card.Text>
            </Card.Body>  
            </Card>
             )) }
   
         </Col>
         </Row>

    </div>
  )
}

export default Favorites