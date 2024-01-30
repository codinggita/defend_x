import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Protection from '../pages/Protection/Protection';
import Contact from '../pages/Contact/Contact';
import Home from '../pages/Home/Home';
import Services from '../pages/Service/Services';
import Training from '../pages/Training/Training';
import Navbar from '../Navbar/Navbar';
import Login from "../pages/login/Login";

const Rou = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path='/' component={Home} />
          <Route exact path='/protection' component={Protection} />
          <Route exact path='/training' component={Training} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/login' component={Login} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default Rou
