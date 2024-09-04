
import Aboutus from './ABOUTUS/Aboutus';
import Facilities from './ADDPROPERTY/Facilities';
import Parentcomponent from './ADDPROPERTY/Parentcomponent';
import Upload from './ADDPROPERTY/Upload';
import './App.css';
import Houses from './BIGGERHOME/Houses';
import Ourvalue from './OURVALUES/Ourvalue';
import Properties from './PROPERTIES/Properties';
import Mainroot from './ROOTCOMPONENT/Mainroot';
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import { useState } from 'react';
import Addimage from './ADDPROPERTY/Addimage';
import Signup from './FOOTER/Signup';
import Login from './FOOTER/Login';
import Favorites from './Carousilimages/Favorites';
import Booking from './BIGGERHOME/Booking';
import Forgot from './FOOTER/Forgot';
import Reset from './FOOTER/Reset';
import Payment from './BIGGERHOME/Payment';

function App() {

    const[progress,setprogress]=useState(0);

    const increammentprogress=()=>{
      setprogress(prevprogress => Math.min(prevprogress+25,100));
    }

  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Mainroot/>}></Route>
      <Route path='/residencies' element={<Properties/>}></Route>
      <Route path='/Houses/:objectid' element={<Houses/>}></Route>
      <Route path='/addimage' element={<Addimage progress={progress} onNextStep={increammentprogress}/>}></Route>
      <Route path='/upload' element={<Upload progress={progress} onNextStep={increammentprogress} />} ></Route>
      <Route path='/parentcomponent' element={<Parentcomponent progress={progress} onNextStep={increammentprogress} />}></Route>
      <Route path='/facility' element={<Facilities progress={progress} onNextStep={increammentprogress} />}></Route>
      <Route path='/ourvalue' element={<Ourvalue/>}></Route>
      <Route path='/home/:e' element={<Mainroot/>}></Route>
      <Route path='/contact' element={<Aboutus/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/favorites' element={<Favorites/>}></Route>
      <Route path='/booking' element={<Booking/>}></Route>
      <Route path='/forgot' element={<Forgot/>}></Route>
      <Route path='/reset/:token' element={<Reset/>}></Route>
      <Route path='/payment' element={<Payment/>}></Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
