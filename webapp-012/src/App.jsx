import React from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import Empresa from './Components/Empresa';
import Lojas from './Components/Lojas';

import LojaJapao from './Components/Lojas/LojaJapao';
import LojaEua from './Components/Lojas/LojaEua';
import LojaBrasil from './Components/Lojas/LojaBrasil';

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>

        </nav>

        <Routes>
          <Route path="/" element={<Empresa />} />
          <Route path="lojas" element={<><Lojas/><Outlet /></>}>
            <Route path="japao" element={<LojaJapao />} />
            <Route path="eua" element={<LojaEua />} />
            <Route path="brasil" element={<LojaBrasil />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
