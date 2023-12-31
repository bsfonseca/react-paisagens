import styled from "styled-components";
import paisagem1 from "../assets/paisagem1.jpg";

const ContatoStyled = styled.div`
    height: 200px;
    @media screen and (max-width: 1250px) {
        background-position: center;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-image: url("${paisagem1}");
    background-size: cover;
    background-position-y: -500px;

    p {
        font-family: "Gabarito";
        font-size: 26px;
        color: white;
    }
`;

export const Contato = () => {
    return (
        <ContatoStyled>
            <p>Entre em contato conosco!</p>
        </ContatoStyled>
    );
};
