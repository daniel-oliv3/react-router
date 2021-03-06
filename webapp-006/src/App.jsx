import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

//Componentes
import Header from './Components/Header';
import Home from './Components/Home';
import Services from './Components/Services';
import Contacts from './Components/Contacts';
import Error from "./Components/Error";
import About from "./Components/About";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
    <Header/>
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/about' element={<About />} />
        <Route path='/outro' element={<Navigate to="/about" />} />
        <Route path='/*' element={<Error />} />
     </Routes>
     <Footer/>
    </>
  );
}
