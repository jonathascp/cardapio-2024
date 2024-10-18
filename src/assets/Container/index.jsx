import styled from "styled-components";

const ContainerEstilizado = styled.div`
    width: 500px;
    padding: 7px 0;
    background-color: #fff;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const TituloEstilizado = styled.h1`
    color: #000;
    font-size: 1.7em;
    font-weight: bold;
    font-family: "Roboto Mono",sans-serif;
    font-style: oblique;
`;



export default function Container({ children })
{
    return(
        <ContainerEstilizado>
            <TituloEstilizado>Monte seu cardápio</TituloEstilizado>
            {children}
        </ContainerEstilizado>
    )
}