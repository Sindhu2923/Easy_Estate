import React from 'react';
import './Addimage.css';
import { useState} from 'react';
import {Form,Row,Col, Button,} from 'react-bootstrap';
import { MapContainer,Marker,TileLayer } from 'react-leaflet';
import Addproperties from '../ARRAYDATAS/addproperties.json';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Btnsuccess from './Btnsuccess';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const Addimage = ({progress,onNextStep}) => {


  const[Center,setcenter]=useState({latitude:51.505,longitude: -0.09});
  const[latvalue,setlatvalue]=useState(0);
  const[longvalue,setlongvalue]=useState(0);
  const[state,setstate]=useState(0);
  const[country,setcountry]=useState(0);
  const navigate=useNavigate();
  
    
  const handlechange=(e)=>{
    const countryname=e.target.value;
    setcountry(countryname);
    const countrydata=Addproperties.find((temp)=>temp.Title && temp.Title.toLowerCase()===countryname.toLowerCase());
    if(countrydata){
      setcenter({
        latitude:countrydata.latitude,
        longitude:countrydata.longitude
      });
    }
  };  
  
  const handlemarker=(e)=>{
    const cityname=e.target.value;
    setstate(cityname);
  }

    const handlemouseover=(e)=>{
          if(latvalue && longvalue){
          const map=e.target._map;
          map.setView([latvalue,longvalue],map.getZoom()+2);
          }
    };

   
  const customIcon=new L.Icon({
    iconUrl:'https://static.vecteezy.com/system/resources/previews/009/589/758/non_2x/location-location-pin-location-icon-transparent-free-png.png',
    iconSize:[50,50],
    iconAnchor:[25,50],
  });

  const handlemarkerclick=(e)=>{
    const map=e.target._map;
    map.setView([Center.latitude,Center.longitude],map.getZoom() + 2);
  }; 

 const handlelatitude=(e)=>{
  const latitudevalue=e.target.value;
  setlatvalue(latitudevalue);
 }

 const handlelongitude=(e)=>{
  const longitudevalue=e.target.value;
  setlongvalue(longitudevalue);
 }

 const handlesubmit=(e)=>{
  e.preventDefault();
  const formvalue=e.currentTarget;
  if(formvalue.checkValidity()===true)
    {
      onNextStep();
      navigate('/upload');
      axios.post("https://easy-estate-backend.onrender.com/properties/house",{
        country,
        state,
        latvalue,
        longvalue,
      })
    }
 }

  return (
    <>
            <Btnsuccess progress={progress}/>
            <Row>
            <Col xs={12} lg={6}> 
            <Form className='text-xs-center text-sm-left total-center' onSubmit={handlesubmit}>
                <Form.Group>
                    <Form.Label column sm="1">Country</Form.Label>
                    <Col xs={12} sm={9}>
                    <Form.Control type='text' placeholder='Country Name please enter India'
                    required  
                     onChange={handlechange} 
                    />
                    </Col>
                </Form.Group>
                <br/>
                <Form.Group >
                  <Form.Label>State</Form.Label>
                  <Col xs={12} sm={9}>
                  <Form.Control type='text' placeholder='State Name'
                  onChange={handlemarker}
                  required
                  />
                  </Col>
                </Form.Group>
                <br/>
                <Form.Group>
                  <Form.Label>Latitude </Form.Label>
                  <Col xs={12} sm={9}>
                  <Form.Control  type='text' placeholder='Enter latitude value of your city'
                  onChange={handlelatitude} minLength={6} required
                  />
                  </Col>
                </Form.Group>
                <br/>
                <Form.Group>
                  <Form.Label>Longitude</Form.Label>
                    <Col xs={12} sm={9}>
                    <Form.Control  type='text' placeholder='Enter longitude value of your city'
                    onChange={handlelongitude} minLength={6} required 
                    />
                    </Col>
                </Form.Group>
                <Col className='mt-5' id="movebutton">
                <Button id="button-color" style={{ fontFamily: "Balthazar, serif" }} type='submit'>
                  Next Step
                 </Button>
                 </Col>
                </Form>
                </Col>

          <Col xs={12} lg={6} className='mt-5 mt-lg-0'> 
          <MapContainer key={`${Center.latitude},${Center.longitude}`} center={[Center.latitude, Center.longitude]} zoom={3} style={{ height: '300px', width: '65%' }} className='map-center' id='mapxs'>
            <TileLayer 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />  
          <Marker position={[latvalue,longvalue]} icon={customIcon} eventHandlers={{click:handlemarkerclick,mouseover:handlemouseover,}}
          />
            </MapContainer>
            </Col>
          </Row>
          

    </>
  )
}

export default Addimage