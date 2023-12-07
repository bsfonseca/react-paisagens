import { PaisStyled } from "./PaisStyled";
import paisagem22 from "../assets/paisagem22.jpg";

export const Suica = () => {
    return (
        <PaisStyled imgUrl={paisagem22}>
            <div className="texto">
                <h1>Alpes suiços</h1>
                <h2>Suiça</h2>
                <p>
                    Os Alpes Suíços são uma majestosa cadeia montanhosa localizada na Suíça, conhecida por suas
                    imponentes montanhas, vales deslumbrantes e desafios alpinos. O Matterhorn, um pico icônico em forma
                    de pirâmide, é um destaque entre muitos outros impressionantes picos alpinos.A beleza natural dos
                    Alpes Suíços atrai entusiastas de atividades ao ar livre, amantes da natureza e turistas em busca de
                    vistas espetaculares e aventuras alpinas.
                </p>
            </div>
            <div className="imagem"></div>
        </PaisStyled>
    );
};
