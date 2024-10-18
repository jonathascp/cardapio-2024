import styled from "styled-components"

const Pedido = styled.p`
    color: #000;
    font-size: 1.4em;
    font-weight: bold;
    margin: 0;
`;

const NovoPedido = styled.p`
    background: lightgrey;
    margin: 0;
    padding: 5px;
`;

export default function Pedidos({ prato,bebida,sobremesa })
{
    return(
        <>
            <Pedido>Prato</Pedido>
            <NovoPedido>{prato}</NovoPedido>

            <Pedido>Bebida</Pedido>
            <NovoPedido>{bebida}</NovoPedido>

            <Pedido>Sobremesa</Pedido>
            <NovoPedido>{sobremesa}</NovoPedido>
        </>
    )
}