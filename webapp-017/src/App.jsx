//React Router (v5)
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Componentes
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Contact from './Contact';

export default function App() {
  return (
    <BrowserRouter>
      <h1>React Router V5</h1>
      
      <Nav />

      <hr />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/about/:id">
          <About />
        </Route>

        <Route path="*">
          <h1>Erro: Página não existe!</h1>
        </Route>
      </Switch>

      

    </BrowserRouter>
  );
}