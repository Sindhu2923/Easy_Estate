import React from 'react'
import Title from '../HEADER/Title'
import Hometext from '../HOME TEXT/Hometext'
import Popularimage from '../Carousilimages/Popularimage'
import Value from '../OurValue/Value'
import Contact from '../CONTACT US/Contact'
import Footer from '../FOOTER/Footer'
import { useParams } from 'react-router-dom'


const Mainroot = () => {
 const {e}=useParams();
 if(e)
{
 sessionStorage.setItem("p_name",e);
}

  return (
    <div>
        <Title/>
        <Hometext/>
        <Popularimage/>
        <Value/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Mainroot