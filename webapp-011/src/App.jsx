import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {

  return (
    <>
      <h1>React Router</h1>
      <hr />




      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
      </Routes>
    </>
  );
}