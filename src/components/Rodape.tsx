import styled from "styled-components";

import instagramIcone from "../assets/instagram.png";
import facebookIcone from "../assets/facebook.webp";
import twitterIcone from "../assets/twitter.png";

const RodapeStyled = styled.div`
    display: flex;
    flex-direction: row;
    padding: 60px 120px;
    justify-content: space-between;
    background-color: #fafafa;

    #rodape-links {
        color: #2c2c72;
        font-weight: bold;
        display: flex;
        flex-direction: row;
        align-items: center;

        span {
            margin-right: 16px;
        }
        .divisor {
            font-size: 8px;
        }
    }

    #nome-site {
        color: #555;
        font-size: 12px;
        margin-top: 8px;
    }

    #rodape-icones {
        img {
            height: 30px;
            margin-left: 20px;
        }
    }
`;

export const Rodape = () => {
    return (
        <RodapeStyled>
            <div>
                <div id="rodape-links">
                    <span>Sobre</span>
                    <span className="divisor">•</span>
                    <span>Contato</span>
                    <span className="divisor">•</span>
                    <span>Termos de uso</span>
                    <span className="divisor">•</span>
                    <span>Privacidade</span>
                </div>
                <p id="nome-site"> © Viagens Growdev 2023. Todos os direitos reservados.</p>
            </div>
            <div id="rodape-icones">
                <img src={facebookIcone} alt="Icone facebook" />
                <img src={instagramIcone} alt="Icone instagram" />
                <img src={twitterIcone} alt="Icone twitter" />
            </div>
        </RodapeStyled>
    );
};
