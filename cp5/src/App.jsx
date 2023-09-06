import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Menu from "./components/Menu";

export default function App() {

  //Criando props para ser transmitido para um dos componentes filhos.
  return (
    <>
      <Menu />
      <Outlet />
      <Footer />
    </>
  )
}
