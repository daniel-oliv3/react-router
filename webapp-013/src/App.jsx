import { BrowserRouter, Routes, Route } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';

//Componentes
import Layout from './Components/Layout';

import Home from './Components/Home';
import Services from './Components/Services';
import About from './Components/About';


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="home" element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

