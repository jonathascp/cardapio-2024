import { useEffect, useState } from "react";
import styled from "styled-components";
import Pedido from "../../assets/Pedido";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ContainerPedidos = styled.div`
    width: 500px;
    padding: 7px 0;
    background-color: #fff;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export default function PaginaPedido()
{
    const [pedidoFeito,setPedidoFeito] = useState([]);

    useEffect(() => {
    fetch("http://localhost:3000/cardapio")
    .then(resposta => resposta.json())
    .then((data) => setPedidoFeito(data));
    },[]);
    
    
    
    
    return (
        <Container>
            <ContainerPedidos>
                {pedidoFeito.map((pedido) => {
                    return <Pedido id={pedido.id}
                    prato={pedido.prato}
                    bebida={pedido.bebida}
                    sobremesa={pedido.sobremesa}
                    />
                })}
            </ContainerPedidos>
        </Container>
    )
}