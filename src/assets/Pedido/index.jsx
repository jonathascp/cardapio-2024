import styled from "styled-components"

const PedidoContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    margin: 10px;
`;

const IdPedido = styled.p`
    width: 100%;
    background: red;
    color: #fff;
    font-size: 1.3em;
    text-align: left;
    margin: 0;
`;

const TipoDePedido = styled.h3`
    font-size: 1.3em;
    background-color: #e4e4e4;
    width: 100%;
    text-align: center;
    margin: 0px 5px;
`;

const NomeDoPedido = styled.p`
    margin: 5px;
`;
export default function Pedido({id,prato, bebida, sobremesa})
{
    return (
        <PedidoContainer>
            <IdPedido>ID pedido: {id}</IdPedido>
            <TipoDePedido>Prato</TipoDePedido>
            <NomeDoPedido>{prato}</NomeDoPedido>
            <TipoDePedido>Bebida</TipoDePedido>
            <NomeDoPedido>{bebida}</NomeDoPedido>
            <TipoDePedido>Sobremesa</TipoDePedido>
            <NomeDoPedido>{sobremesa}</NomeDoPedido>
        </PedidoContainer>
    )
}