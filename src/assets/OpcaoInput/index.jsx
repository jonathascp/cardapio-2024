import styled from "styled-components";

const TituloCampo = styled.h2`
    font-family: "Roboto Mono",sans-serif;
    font-size: 1.3em;
    margin: 0;
`;

const Select = styled.select`
    width: 80%;

    border: 1px solid #000;
    padding: 5px;
    margin-bottom: 15px;
`;


const Option = styled.option`
    font-family: "Roboto Mono",sans-serif;

`;

export default function OpcaoInput({ children,opc1,opc2,opc3,pedido,tipoPedido })
{
      return(
        <>
            <TituloCampo>
                {children}
            </TituloCampo>
            <Select onChange={pedido}>
                <Option selected value="Padrao" disabled>Escolha {tipoPedido}</Option>
                <Option value={opc1}>{opc1}</Option>
                <Option value={opc2}>{opc2}</Option>
                <Option value={opc3}>{opc3}</Option>
            </Select>
        </>
       
    )
}