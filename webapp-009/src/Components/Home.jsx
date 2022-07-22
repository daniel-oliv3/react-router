import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const irPara = useNavigate();


    return (
        <section className="container">
          <div className="row justify-content-center mt-3">
            <div className="col-8 card bg-light text-center p-3">
              <h1>Home!</h1>
            </div>

            <div className="text-center mt-4">
              <button onClick={() => {
                irPara("/services")
              }}>Serviços</button>
            </div>
          </div>
        </section>
    );
}