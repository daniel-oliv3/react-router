import React from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import Empresa from './Components/Empresa';
import Lojas from './Components/Lojas';

import LojaLisboa from './Components/Lojas/LojaLisboa';
import LojaEua from './Components/Lojas/LojaEua';
import LojaBrazil from './Components/Lojas/LojaBrazil';


export default function App() {

  return (
    <>

      <BrowserRouter>
        <nav>

        </nav>

        <Routes>
          <Route path="/" element={<Empresa />} />
          <Route path="lojas" element={<><Lojas/><Outlet /></>}>
            <Route path="lisboa" element={<LojaLisboa />} />
            <Route path="eua" element={<LojaEua />} />
            <Route path="brazil" element={<LojaBrazil />} />
          </Route>
        </Routes>

      </BrowserRouter>
      






      
    </>
  );
}
