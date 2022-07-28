import React from "react";
import { Link, Route } from 'react-router-dom';

export default function Services() {
    return (
       <section className="container">
          <div className="row justify-content-center mt-3">
            <div className="col-8 card bg-light text-center p-3">
            <h1>Serviços</h1>


            <Route>

            </Route>


            <Link to={'/about'}>Sobre Nós</Link>
            </div>
          </div>
        </section>
    );
}
  