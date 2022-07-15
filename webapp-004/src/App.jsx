import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

//Componentes
import Home from './Components/Home';
import Services from './Components/Services';
import Contacts from './Components/Contacts';
import Error from "./Components/Error";

export default function App() {
  return (
    <>
     <nav className="container">
      <div className="row">
        <div className="col">
          <Link className="btn btn-primary me-3" to="/">Home</Link> 
          <Link className="btn btn-primary me-3" to="/services">Serviços</Link> 
          <Link className="btn btn-primary" to="/contacts">Contatos</Link>
          </div>
      </div>       
     </nav> 
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/*' element={<Error />} />
     </Routes>
    </>
  );
}
