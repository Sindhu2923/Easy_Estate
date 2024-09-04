import React, { useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./title.css";
import { Button, ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Title = () => {
  const [value,setvalue]=useState(false);
  let check;
  let upper;
  const a=sessionStorage.getItem("p_name");
  const namevalue=a || "";
  check=namevalue.charAt(0) || "";
  upper=check.toUpperCase();
  const navigate=useNavigate();

  
  useEffect(() => {
    if (check !== "") {
      setvalue(true);
    }
  }, [check]);
  const handleclick=()=>{
    sessionStorage.setItem("p_name","");
    sessionStorage.setItem("token","");
    setvalue(false);
    navigate("/");
  }

  const handlelogin=()=>{
    const token = sessionStorage.getItem("token");
    axios.post("https://easy-estate-backend.onrender.com/Properties/Addpropertytoken",{
      token,
    }).then((res)=>{
      if(res.data.err)
      {
        navigate("/login");
      }
      else 
      {
        navigate("/addimage");
      }
    })
  }

  const handlebooking = ()=>{
    const token = sessionStorage.getItem("token");
    axios.post("https://easy-estate-backend.onrender.com/Properties/Addpropertytoken",{
      token,
    }).then((res)=>{
      if(res.data.err)
      {
        navigate("/login");
      }
      else 
      {
        navigate("/booking");
      }
    })
  }

  const handlefavorites = ()=>{
    navigate("/favorites");
  }
  

  return (
   <Navbar  expand="md"  data-bs-theme="dark" id='navbar'> 
    <Container>
      <Navbar.Brand href='/'><i className="bi bi-house-heart"><span style={{fontFamily: 'Lora ,serif'}} className='fw-bold'> Homyz</span></i></Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse className='justify-content-end' id='basic-navbar-nav'>
      <Nav id='nav'>
        <Nav.Link href='/residencies'><span style={{fontFamily: 'Alegreya SC,serif'}} className='fw-bold'>Residencies</span></Nav.Link>
        <Nav.Link href='/ourvalue'><span style={{fontFamily: 'Alegreya SC,serif'}} className='fw-bold'>Our Value</span></Nav.Link>
        <Nav.Link href='/contact'><span style={{fontFamily: 'Alegreya SC,serif'}} className='fw-bold'>Contact Us</span></Nav.Link>
        <Nav.Link ><span style={{fontFamily: 'Alegreya SC,serif'}} className='fw-bold' onClick={handlelogin}>Addproperty</span></Nav.Link>
       {value && <ButtonGroup>
          <DropdownButton id="dropdown-button" title={upper} >
          <Dropdown.Item><Nav.Link onClick={handlefavorites} style={{fontFamily: 'Alegreya SC,serif'}} className='fw-bold'>Favorites</Nav.Link></Dropdown.Item>
          <Dropdown.Item><Nav.Link  style={{fontFamily: 'Alegreya SC,serif'}} className='fw-bold' onClick={handlebooking}>Booking</Nav.Link></Dropdown.Item>
          <Dropdown.Item><Button onClick={handleclick}  style={{fontFamily: 'Alegreya SC,serif'}} className='fw-bold' id='logout-button'>logout</Button></Dropdown.Item>
          </DropdownButton>
        </ButtonGroup>
       }
      </Nav>
      </Navbar.Collapse>
    </Container>
   </Navbar>
  )
}

export default Title