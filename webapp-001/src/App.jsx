import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Componentes
import Home from './Components/Home';
import Services from './Components/Services';
import Contacts from './Components/Contacts';

export default function App() {
  return (
    <BrowserRouter>
     <h1>React Router App!</h1> 
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contacts' element={<Contacts />} />
     </Routes>
    </BrowserRouter>
  );
}

