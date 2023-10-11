import styled from "styled-components";

const ConteudoStyled = styled.div`
    height: 300px;
    background-color: red;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-image: url("./src/assets/paisagem1.jpg");
    background-size: cover;
    background-position-y: -150px;

    p {
        font-family: "Gabarito";
        font-size: 36px;
        color: white;
    }
`;

export const Conteudo = () => {
    return (
        <ConteudoStyled>
            <p>Primeira pagina</p>
        </ConteudoStyled>
    );
};
