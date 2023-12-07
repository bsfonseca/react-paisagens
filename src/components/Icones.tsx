import styled from "styled-components";
import aviao from "../assets/aviao.png";
import mala from "../assets/aviao.png";
import destino from "../assets/aviao.png";

const IconesStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 60px 10px;
    background-color: #fafafa;

    .figura1 {
        width: 100px;
    }

    .texto-info {
        text-align: center;
        margin: 0 10px;
        max-width: 200px;

        h1 {
            font-size: 24px;
            margin-top: 8px;
            margin-bottom: 8px;
        }
    }
`;

export const Icones = () => {
    return (
        <IconesStyled>
            <div className="texto-info ">
                <img className="figura1" src={aviao} alt="Imagem avião" />
                <h1>Viaje pelo mundo</h1>
                <p>Explorando novos destinos juntos sempre</p>
            </div>
            <div className="texto-info">
                <img className="figura1" src={mala} alt="Imagem mala" />
                <h1>Planeje suas férias</h1>
                <p>Faça logo suas malas!</p>
            </div>
            <div className="texto-info">
                <img className="figura1" src={destino} alt="Imagem destino" />
                <h1>Conheça lugares</h1>
                <p>Descobrindo o mundo juntos agora</p>
            </div>
        </IconesStyled>
    );
};
