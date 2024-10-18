import styled from "styled-components";
import Botao from "../Botao";


const FundoModal = styled.div`
    background: rgba(0,0,0,.7);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const Modal = styled.div`
    width: 400px;
    height: 400px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;

const TituloEstilizado = styled.h3`
    width: 80%;
    color: #000;
    font-size: 1.3em;
    font-weight: bold;
    background: rgba(0,0,0,0.2);
    text-align: center;
    margin: 10px;
`;


export default function ModalPedido({ fecharModal,prato,bebida,sobremesa })
{
    return(
        <>
            <FundoModal>
                <Modal>
                    <TituloEstilizado>
                        Prato
                    </TituloEstilizado>
                    <p>{prato}</p>
                    <TituloEstilizado>
                        Bebiba
                    </TituloEstilizado>
                    <p>{bebida}</p>
                    <TituloEstilizado>
                        Sobremesa
                    </TituloEstilizado>
                    <p>{sobremesa}</p>
                   <Botao onClick={fecharModal}>Pedir</Botao>
                </Modal>
            </FundoModal>
        </>
    )
}