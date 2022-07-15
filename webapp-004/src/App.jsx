import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

//Componentes
import Home from './Components/Home';
import Services from './Components/Services';
import Contacts from './Components/Contacts';

export default function App() {
  return (
    <>
     <h1>React Router App!</h1>
     <nav>
        <Link to="/">Home</Link> |
        <Link to="/services">Serviços</Link> |
        <Link to="/contacts">Contatos</Link>
     </nav> 
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contacts' element={<Contacts />} />
     </Routes>
    </>
  );
}
