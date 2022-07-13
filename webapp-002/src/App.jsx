import React from "react";
import { Routes, Route } from "react-router-dom";

//Componentes
import Home from './Components/Home';
import Services from './Components/Services';
import Contacts from './Components/Contacts';

export default function App() {
  return (
    <>
     <h1>React Router App!</h1> 
     <Routes>
        <Route path='/' element={<Home />} />
        <Route caseSensitive={true} path='/services' element={<Services />} />
        <Route path='/contacts' element={<Contacts />} />
     </Routes>
    </>
  );
}

 /*caseSensitive={true} o url tem que ser identico path='Services'*/