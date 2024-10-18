import styled from "styled-components";

const NavBarEstilizada = styled.nav`

`;  

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

export default function NavBar()
{
    return (
        <>
            <NavBarEstilizada>
                <UlEstilizado>
                    <ListaEstilizada>
                            Início
                    </ListaEstilizada>
                    <ListaEstilizada>
                            Pedidos
                    </ListaEstilizada>
                </UlEstilizado>                           
            </NavBarEstilizada>
        </>
    )
}