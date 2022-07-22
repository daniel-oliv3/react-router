import React from "react";
import { useState } from "react";
import { Link, useParams } from 'react-router-dom';

export default function About() {

    let {id} = useParams();

    const [nomes] = useState([
      'Daniel',
      'Priscila',
      'Sapup3'
    ]);


    return (
        <section className="container">
          <div className="row justify-content-center mt-3">
            <div className="col-8 card bg-info text-black text-center p-3">
              <h5>Cliente:</h5>
              <h4>{nomes[id]}</h4>             
            </div>
            <div className="col-12 text-center mt-3">
              <Link to={'/'}>Home</Link>
            </div>
          </div>
        </section>
    );
}
  