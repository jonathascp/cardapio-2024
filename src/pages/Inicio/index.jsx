import { Outlet } from "react-router-dom";
import HeaderEstilizado from "../../assets/Header";
import NavBar from "../../assets/NavBar";
import TituloEstilizado from "../../assets/Titulo";

export default function Inicio()
{
    return (
        <>
        <HeaderEstilizado>
            <TituloEstilizado>Cardápio 2024</TituloEstilizado>
            <NavBar/>
        </HeaderEstilizado>
        <Outlet/>
        
        </>
    )
    
}