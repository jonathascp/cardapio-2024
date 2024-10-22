import styled from "styled-components"
import EstiloGlobal from "./assets/EstiloGlobal";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import PaginaPadrao from "./pages/PaginaPadrao";
import PaginaPedido from "./pages/PaginaPedidos";

const FundoCorSolida = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #003777;
  `;

function App()
{
  return (

    <FundoCorSolida>
      <EstiloGlobal />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio/>}>
            <Route index element={<PaginaPadrao/>}/>
            <Route path="/pedidos" element={<PaginaPedido/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </FundoCorSolida>

  )

}


export default App
