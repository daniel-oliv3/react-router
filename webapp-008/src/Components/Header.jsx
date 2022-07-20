import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="container-fluid- bg-dark text-white p-2 text-center">
        <div className="row">
          <div className="col">
            <h3>React Router App!</h3>
          </div>
        </div>
      </div>
      <nav className="container mt-3">
        <div className="row">
          <div className="col text-center">
            <Link className="btn btn-primary me-3" to="/">Home</Link>
            <Link className="btn btn-primary me-3" to="/services">Serviços</Link>
            <Link className="btn btn-primary" to="/contacts">Contatos</Link>
          </div>
        </div>
      </nav>
    </>
  );
}
