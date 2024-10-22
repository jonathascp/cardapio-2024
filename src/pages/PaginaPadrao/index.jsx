import { useState } from "react";
import styled from "styled-components";
import Botao from "../../assets/Botao";
import ModalPedido from "../../assets/Modal";
import Container from "../../assets/Container";
import OpcaoInput from "../../assets/OpcaoInput";

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #003777;
    display: flex;         
    justify-content: center;
    align-items: center;
  `;
export default function PaginaPadrao()
{

    
  const [pratoPedido, setPratoPedido] = useState("Não selecionado");
  const [bebidaPedido, setBebidaPedido] = useState("Não selecionado");
  const [sobremesaPedido, setSobremesaPedido] = useState("Não selecionado");
  
  const [abrirModal, setAbrirModal] = useState(false);
  

  function criarPedido()
  {
    const pedidoFeito = {
      prato: pratoPedido,
      bebida: bebidaPedido,
      sobremesa: sobremesaPedido
    };

    const url = "http://localhost:3000/cardapio";

    fetch(url,{
    method: "POST",
    body: JSON.stringify(pedidoFeito),
    headers: {
        "Content-type" : "application/json",
        }
    });
  }

      return (
        <AppContainer>
        <Container>

          <OpcaoInput
            opc1="Lasanha"
            opc2="Pizza"
            opc3="Churrasco"
            pedido={(e) => setPratoPedido(e.target.value)}
            tipoPedido="seu prato"
          >
            Prato Principal
          </OpcaoInput>

          <OpcaoInput
            opc1="Coca-cola"
            opc2="Fanta laranja"
            opc3="Suco de uva"
            pedido={(e) => setBebidaPedido(e.target.value)}
            tipoPedido="sua bebida"
          >
            Bebida
          </OpcaoInput>

          <OpcaoInput
            opc1="Pudim"
            opc2="Bolo de chocolate"
            opc3="Salada de fruta"
            pedido={(e) => setSobremesaPedido(e.target.value)}
            tipoPedido="sua sobremesa"
          >
            Sobremesa
          </OpcaoInput>

          <Botao onClick={() => {
            setAbrirModal(true);
            criarPedido();
          } }
            >Pedir
          </Botao>
          {abrirModal &&
            <ModalPedido fecharModal={() => setAbrirModal(false)} prato={pratoPedido} bebida={bebidaPedido} sobremesa={sobremesaPedido}></ModalPedido>}
        </Container>
      </AppContainer>
    )
    }
    

