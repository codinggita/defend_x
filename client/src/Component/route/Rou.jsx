import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Protection from '../pages/Protection/Protection';
import Contact from '../pages/Contact/Contact';
import Home from '../pages/Home/Home';
import Services from '../pages/Service/Services';
import Training from '../pages/Training/Training';
import Navbar from '../Navbar/Navbar';
import Login from "../pages/login/Login";
import Footer from '../Footer/Footer'
const Rou = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>} />
          <Route exact path='/protection' element={<Protection/>} />
          <Route exact path='/training' element={<Training/>} />
          <Route exact path='/services' element={<Services/>} />
          <Route exact path='/contact' element={<Contact/>} />
          <Route exact path='/login' element={<Login/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default Rou
