import React from 'react';
import './popularimage.css';
import { Container, Row, Col, Card, Button,Image, Modal} from 'react-bootstrap';
import { useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";


export const cardData = [
  { id: 1, rupees:'$', price: '2000', title:'Wider Residence...',content:'Massive opportunity to build your dream home at the base of mummy mountain in...',  imageSrc: 'https://www.holidify.com/images/cmsuploads/compressed/266905214_20231017161531.jpg' },
  { id: 2, rupees:'$', price: '10000', title:'Green Cortage...', content:'Massive opportunity to build your dream home at the base of mummy mountain in...',  imageSrc: 'https://i.pinimg.com/736x/fa/56/2d/fa562dea7a95cf59a11dcda3d71977d6.jpg' },
  { id: 3, rupees:'$', price: '2000', title:'Gost Residence...', content:'Massive opportunity to build your dream home at the base of mummy mountain in...',  imageSrc: 'https://www.hotelieracademy.org/wp-content/uploads/2018/12/nandini-main-1.jpg' },
  { id: 4, rupees:'$', price: '2000', title:'Orange Cortage...', content:'Massive opportunity to build your dream home at the base of mummy mountain in...',  imageSrc: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/235843754.jpg?k=49110ec6827925f6c5f997059ae0fb1e0b6f8f63f925c61f180fe912ad552984&o=&hp=1' },
  { id: 5, rupees:'$', price: '5000', title:'Jhon Residence...', content:'Massive opportunity to build your dream home at the base of mummy mountain in...',  imageSrc: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/235842148.jpg?k=41320938a9e6b3fb9a8117c1b1e8dd9585eade1f5da3b179fb57d7c2d7cdbee7&o=&hp=1' },
  { id: 6, rupees:'$', price: '6000', title:'Orange Cortage...', content:'Massive opportunity to build your dream home at the base of mummy mountain in...',  imageSrc: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D' },
  { id: 7, rupees:'$', price: '8000', title:'Pine View...', content:'Massive opportunity to build your dream home at the base of mummy mountain in...',  imageSrc: 'https://i.pinimg.com/originals/ca/81/0d/ca810d11ee20315d8cd0c53c454cbe9a.jpg' },
  { id: 8, rupees:'$', price: '2000', title:'The Queen of Hills...', content:'Massive opportunity to build your dream home at the base of mummy mountain in...',  imageSrc: 'https://www.cayugacollection.com/wp-content/uploads/2020/07/Master-Suite-1024x683.jpg' },
  { id: 9, rupees:'$', price: '2000', title:'The King of Hills', content:'Massive opportunity to build your dream home at the base of mummy mountain in...',  imageSrc: 'https://d1zdxptf8tk3f9.cloudfront.net/ckeditor_assets/pictures/2077/content_amy_clay_artist_residency_1.jpg' },
  { id: 10, rupees:'$', price: '3000', title:'Golden Palace...', content:'Massive opportunity to build your dream home at the base of mummy mountain in...',  imageSrc: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/513565971.jpg?k=964fbc76f3bd30137eb7e6b629a2196ca49a6e59510a0908cc05857def71f1dc&o=&hp=1' },
  { id:11,  rupees:'$', price: '9000', title:'Daimond House...',content:'We are the most expensive house we provide a safest and cleanest service here...',imageSrc:'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D'},
];

const Popularimage = () => {
  const [liked,setliked]=useState(0);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [displayCount, setDisplayCount] = useState(1);
  const [models,setmodels] = useState(0);
  const [close,setclose] = useState(false);
  const emailvalue = sessionStorage.getItem("p_name");
  const token = sessionStorage.getItem("token");

  const navigate = useNavigate();
  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => Math.min(prevIndex + 1, cardData.length - displayCount));
  };

  const handlePrev = () => {
    setCurrentCardIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  useEffect(() => {
    const handleResize = () => {
      setDisplayCount(window.innerWidth < 576 ? 1 : 4);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

 const handleclick = (id)=>{
   axios.post("https://easy-estate-backend.onrender.com/Properties/likedvalue",{
    id,emailvalue,token
   }).then((res)=>{
     if(res.data.err)
     {
      navigate("/login");
     }
     else{
      setmodels("this property added to favorites");
      setclose(true);
     }
   })
 }
  
 const handleclose=()=>{
  setclose(false);
 }

  return (
    <>
    <Container className='mt-5'>
      <Row className="text-center">
        <Col xs={12} sm={3} md={3} className="order-1 order-sm-1 ">
             <Image
              src='https://eim.idoxgroup.com/wp-content/uploads/2022/01/PROLOGIS-Logo.png'
              className='img-fluid'
              id='popularimages1'
              alt='Popular Image 1'
              
            />
         </Col>

            <Col xs={12} sm={3} md={3} className="mb-3 order-2 order-sm-2 mt-sm-2"> 
            <Image
              src='https://logowik.com/content/uploads/images/american-tower-corporation9094.logowik.com.webp'
              className='img-fluid'
              id='popularimages2'
              alt='Popular Image 2'
             
            />
          </Col>

            <Col xs={12} sm={3} md={3} className="mb-3 order-4 order-sm-3 mt-sm-2">
            <Image
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE_A8OyQnNdHyr-RLdIma39CLSAaXycZqY3c80pjRUqA&s'
              className='img-fluid'
              id='popularimages3'
              alt='Popular Image 3'
           
            />
          </Col>

            <Col xs={12} sm={3} md={3} className="mb-3 order-3 order-sm-4 mt-sm-3">
            <Image
              src='https://logowik.com/content/uploads/images/digital-realty9875.jpg'
              className='img-fluid'
              id='popularimages4'
              alt='Popular Image 4'
            />
          </Col>
      </Row>
      </Container>

      <Container>
      <Row>
      <Col className={`mt-2 ${window.innerWidth < 576 ? 'text-center' : 'text-left'}`} xs={12} sm={12}>
      <h3><span style={{fontFamily: "Racing Sans One, sans-serif"}}>Best Choices</span></h3>
      <h1><span style={{fontFamily: "Racing Sans One, sans-serif"}}>Popular Residencies</span></h1>
    
      </Col>
      </Row>
      </Container>

      <Container fluid>
  <div className="card-carousel-container">
  <Row className="justify-content-end mb-5">
      <Col xs={6} sm={2} md={1} lg={1}>
        <Button onClick={handlePrev} disabled={currentCardIndex === 0} id='button-color1' >
        <i class="bi bi-caret-left-fill"></i>
        </Button>
      </Col>
      <Col xs={6} sm={2} md={1} lg={1}>
        <Button onClick={handleNext} disabled={currentCardIndex === cardData.length - displayCount} id='button-color2' >
        <i class="bi bi-caret-right-fill"></i>
        </Button>

      </Col>
    </Row>
    
    <Row className="card-carousel">

      <Modal show={close} onHide={handleclose} backdrop="static" keyboard={false} id="modal-color">
        <Modal.Header closeButton>
          <Modal.Title  style={{fontFamily: 'Alegreya SC,serif'}}>{models} 
            <i class="bi bi-suit-heart-fill" 
            style={{ position: 'absolute', top: 17, right:89 }}
            ></i></Modal.Title>
        </Modal.Header>
      </Modal>
      
      {cardData.slice(currentCardIndex, currentCardIndex + displayCount).map((card) => (
        <Col key={card.id} xs={12} sm={6} md={3}>
          <Card className="carousel-card " >
          <Button id="heart-button" size='lg' onClick={()=>handleclick(card.id)} style={{ position: 'absolute', top: 0, right: 0 }}>
          <i class="bi bi-suit-heart-fill"></i>
          </Button>
            <Card.Img variant="top" src={card.imageSrc} alt={`Image for ${card.content}`} className='img-fluid'/>
            <Card.Body id='price'> <span style={{fontFamily: "Protest Revolution ,sans-serif"}}> {card.rupees}</span></Card.Body>
            <Card.Body id='rupees'> <span style={{fontFamily: "Protest Revolution ,sans-serif"}}> {card.price}</span></Card.Body>
            <Card.Title id='title'><span style={{fontFamily: "Alegreya SC, serif"}}>{card.title}</span> </Card.Title>
            <Card.Text><span style={{ fontFamily: "Balthazar, serif"}}>{card.content}</span></Card.Text>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
</Container>
      </>  
  );
};

export default Popularimage;
