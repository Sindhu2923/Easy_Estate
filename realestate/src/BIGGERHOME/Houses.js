import { useState,useEffect } from 'react';
import React from 'react'
import { Container, Row, Col, Image, Button, Alert } from 'react-bootstrap';
import Map from './Map';
import { useParams } from 'react-router-dom';
import Footer from '../FOOTER/Footer';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Houses.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import Title from '../HEADER/Title';


const Houses = () => {

  const [dispaly,setdispaly]=useState([]);
  const [alerts,setalerts]=useState();
  const [stripetoken,setstripetoken]=useState(null);

  const key ="pk_test_51PhP8ML5pUBf6MeusLi0y5pe36b0XDtQMCKiWOZYL9NAkvmImLPmRBvV3SDDYvj6AKa13xnM02YEOoErugye1EJ000rjgvIgOV"
  const navigate = useNavigate();
 
    const {objectid}=useParams();
    useEffect(()=>{
      axios.post("https://easy-estate-backend.onrender.com/properties/onevalue",{
        objectid
      }).then((res)=>{
        setdispaly(res.data.check);
      })
    },[])
 
    const [mapCenter, setMapCenter] = useState({ latitude: 0, longitude: 0 });
    const [click,setclick]=useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [isDateSelected, setIsDateSelected] = useState(false);
   
    const handleDateClick = (date) => {
      setSelectedDate(date);
      setIsDateSelected(true);
    };

   
    const handleBookButtonClick = () => {
     
      let name = "";
      let dates=selectedDate.toDateString();
      if(dispaly[0]?.title){
         name = dispaly[0].title;
      }
      const email=sessionStorage.getItem("p_name");
      const token =sessionStorage.getItem("token");
      axios.post("https://easy-estate-backend.onrender.com/Properties/datevalue",{
        dates,name,email,token
      }).then((res)=>{
         if(res.data.err){
          navigate("/login");
         }
        else
        {
          setalerts("Your Booking is successfully completed");
        }
      })
      if(!alert("date is selected"))
      {
        setclick(false);
      }

    };

const handlepay =()=>{
setalerts("Give card number as 4242 4242 4242 4242")
}


  useEffect(() => {
    if (dispaly[0]?.latitude && dispaly[0]?.longitude) {
      setMapCenter({
        latitude: dispaly[0].latitude,
        longitude: dispaly[0].longitude,
      });
    }
  }, [dispaly]);

 
  const calendarclick=()=>{
    setclick(!click);
  }


  const handletoken=(token)=>{
    setstripetoken(token)
      console.log(token)
  };

  useEffect(()=>{
    if (stripetoken && stripetoken.id) {
    axios.post("https://easy-estate-backend.onrender.com/Properties/payment",{tokenId:stripetoken.id,
      amount:dispaly[0].price*100
    }).then((res)=>{
      if(res.data.stripeErr){
          console.log("error");
      }
      else{
        console.log("success");
        navigate("/payment");

      }
    })
  }
  },[stripetoken])


  if(dispaly.length===0)
  {
    return(
      <p>no data found for id: {objectid}</p>
    );
  }

  return (
    <div>
   <Title/>
    <Container className={`mt-5 ${click ? '' : 'dimmed'}`}  fluid >
    <div className={`overlay ${click ? '' : 'dimmed'}`} onClick={calendarclick}></div>
      <Row className='text-center'>
        <Col>
          <Image
            src={dispaly[0].imageurl}
            className='img-fluid'
            id="Image-custom"
            alt="Crimesen Peak Chalet"
          />
        </Col>
        </Row>
        <Row className='mt-5'>
          <Col sm={12} md={6} lg={6}>
          <h1 style={{ fontFamily: "Racing Sans One, sans-serif" }}>{dispaly[0].title}</h1>
          <p style={{ fontFamily: "Balthazar, serif" }}>
            React-Bootstrap replaces the Bootstrap JavaScript. Each component
            has been built from scratch as a true React component, without
            unneeded dependencies like jQuery. As one of the oldest React
            libraries, React-Bootstrap has evolved and grown alongside React,
            making it an excellent choice as your UI foundation.
          </p>
          <div className='mt-4 '>
          <i class="bi bi-geo-alt-fill">  street 2 chikogo US
          <span className='fs-3 fw-bolder text-warning'> Cost: {dispaly[0].price}</span>
          </i>
          </div>
          <div className='d-grid mt-5'>
            <Button variant='outline-warning border-dark border-2' style={{fontFamily: "Alegreya SC, serif"}}
            onClick={calendarclick}
            >
            Book your visit
            </Button>
    <br/>
{
stripetoken ? <span>Processing please wait....</span> :
       
          <StripeCheckout
          name='homez website'
          image='https://speckyboy.com/wp-content/uploads/2021/09/payment-method-credit-card-logos-icons-thumb.jpg'
          description={`Your total is ${dispaly[0].price}`}
          amount={dispaly[0].price*100}
          token={handletoken}
          stripeKey={key}
          currency='inr'
          >
        <div className='text-center'>
   
        <Button id='pay-button' style={{fontFamily: "Alegreya SC, serif"}} onClick={handlepay}>{`pay amount ${dispaly[0].price}`}</Button>
               
       </div>   
    </StripeCheckout>
}
            <Col>
            {click &&
            <div id="calendarcomponent">
              <Calendar  
              onChange={handleDateClick}
              value={selectedDate}
             
              />
               {isDateSelected && (
       
       
           <Button onClick={() => handleBookButtonClick(selectedDate)}
           className='ms-5'
           variant='warning border-dark border-2'
           style={{fontFamily: "Alegreya SC, serif"}}
          >
            Book Visit on {selectedDate.toDateString()}
          </Button>

         
      )}
            </div>
            }
              </Col>
          </div>
        </Col>
        <Col sm={12} md={6} lg={6} className='mt-5 mt-md-0 mt-lg-0'>
          <Map latitude={mapCenter.latitude} longitude={mapCenter.longitude} />
        </Col>
      </Row>
      {alerts && <Alert variant='success' dismissible>
        <Alert.Heading  style={{fontFamily: "Alegreya SC, serif"}} className='text-center'> {alerts}</Alert.Heading>
    </Alert> } <Footer/>
    </Container>

    </div>
  )
}

export default Houses