import styled from "styled-components";

const ConteudoStyled = styled.div`
    height: 400px;

    @media screen and (max-width: 976px) {
        background-position: center;
    }

    @media screen and (min-width: 1600px) {
        background-position-y: -200px;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-image: url("./src/assets/paisagem1.jpg");
    background-size: cover;
    background-position-y: -150px;

    h1 {
        font-family: "Gabarito";
        font-size: 36px;
        color: white;
    }
    p {
        font-family: "Gabarito";
        font-size: 20px;
        color: white;
    }
`;

export const Conteudo = () => {
    return (
        <ConteudoStyled>
            <h1>Viagens Growdev</h1>
            <p>Explore os melhores destinos da Europa</p>
        </ConteudoStyled>
    );
};
