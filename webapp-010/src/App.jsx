import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

//Componentes
import Header from './Components/Header';
import Home from './Components/Home';
import Services from './Components/Services';
import Contacts from './Components/Contacts';
import Error from "./Components/Error";
import About from "./Components/About";
import Footer from "./Components/Footer";
import AreaReservada from "./Components/AreaReservada";

export default function App() {

  const [logado] = useState(true);

  return (
    <>
    <Header/>
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/about/:id' element={<About />} />
        
        <Route 
          path='/area_reservada' 
          element={
            logado ? <AreaReservada /> : <Navigate to="/" />
          } 
        />

        <Route path='/*' element={<Error />} />
     </Routes>
     <Footer/>
    </>
  );
}
