import React from "react";
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <section className="container">
          <div className="row justify-content-center mt-3">
            <div className="col-8 card bg-info text-black text-center p-3">
              <h5>Autor:</h5>
              <h4>Daniel Oliveira</h4>             
            </div>
            <div className="col-12 text-center mt-3">
              <Link to={'/'}>Home</Link>
            </div>
          </div>
        </section>
    );
}
  