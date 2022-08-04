//React Router (v5)
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Componentes
import Home from './Home';
import About from './About';

export default function App() {
  return (
    <BrowserRouter>
      <h1>React Router V5</h1>
      <hr />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
      </Switch>

    </BrowserRouter>
  );
}