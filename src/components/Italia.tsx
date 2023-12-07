import { PaisStyled } from "./PaisStyled";
import paisagem4 from "../assets/paisagem4.jpg";

export const Italia = () => {
    return (
        <PaisStyled imgUrl={paisagem4}>
            <div className="texto">
                <h1>Lago di Braies</h1>
                <h2>Itália</h2>
                <p>
                    O Lago di Braies, também conhecido como Pragser Wildsee em alemão, é um pitoresco lago alpino
                    localizado no município de Braies, na província de Bolzano, no Alto Ádige, Itália. É um dos lagos
                    mais bonitos e icônicos dos Dolomitas, um Patrimônio Mundial da UNESCO. O lago é cercado por
                    imponentes montanhas e florestas, oferecendo uma paisagem deslumbrante que atrai muitos visitantes,
                    especialmente durante os meses de verão. Muitas pessoas vêm aqui para fazer caminhadas, passeios de
                    barco no lago e desfrutar da beleza natural.
                </p>
            </div>
            <div className="imagem"></div>
        </PaisStyled>
    );
};
