import { Link } from 'react-router-dom';


export default function Nav() {
    return (
      <>
        <Link to="/">Home</Link> &nbsp; | &nbsp;
        <Link to="/about">Sobre Nós</Link> &nbsp; | &nbsp;
        <Link to="/contact">Contato</Link>
      </>
    );
  }