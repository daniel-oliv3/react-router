import { Outlet } from 'react-router-dom';


export default function Layout() {
  return (
    <>

        <nav>
            Navegação
        </nav>

        <Outlet />
    </> 
  );
}
