import React from "react";
import { Link, Route, Routes } from 'react-router-dom';

export default function Services() {
    return (
       <section className="container">
          <div className="row justify-content-center mt-3">
            <div className="col-8 card bg-light text-center p-3">
            <h1>Serviços</h1>


            <Routes>
              <Route path="services1" element={<h3>Serviço 1</h3>}/>
              <Route path="services2" element={<h3>Serviço 2</h3>}/>
              <Route path="services3" element={<h3>Serviço 3</h3>}/>
            </Routes>


            <Link to="/about">Sobre Nós</Link>
            </div>
          </div>
        </section>
    );
}
  