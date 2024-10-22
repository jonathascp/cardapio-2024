import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBarEstilizada = styled.nav``;  

const ListaEstilizada = styled.li`
    font-size: 1.3em;
    color: #fff;
    list-style: none;
`;

const UlEstilizado = styled.ul`
    display: flex;
    margin-right: 30px;
    gap: 30px;

`;

const BotaoLink = styled.button`
    background: none;
    border: none;

    a {
        font-family: "Roboto Mono",sans-serif;
        text-decoration: none;
        color: #fff;
        font-weight: bold;
        font-size: 1.35em;
    }
`;

export default function NavBar()
{
    return (
        <>
            <NavBarEstilizada>
                <UlEstilizado>
                    <ListaEstilizada>
                        <BotaoLink>
                            <Link to="/">Início</Link>
                        </BotaoLink> 
                    </ListaEstilizada>
                    
                    <ListaEstilizada>
                        <BotaoLink>
                            <Link to="/pedidos">Pedidos</Link>
                        </BotaoLink>
                    </ListaEstilizada>
                </UlEstilizado>                           
            </NavBarEstilizada>
        </>
    )
}