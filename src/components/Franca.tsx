import { PaisStyled } from "./PaisStyled";

export const Franca = () => {
    return (
        <PaisStyled imgUrl="./src/assets/paisagem3.jpg">
            <div className="imagem"></div>
            <div className="texto">
                <h1>Le plateau de Valensole </h1>
                <h2>França</h2>
                <p>
                    Os campos de lavanda na França são conhecidos mundialmente por sua beleza e aroma encantador.
                    Localizados principalmente na região da Provença, no sudeste da França, esses campos se estendem por
                    colinas ondulantes, criando uma paisagem pitoresca e deslumbrante. É especialmente conhecido por
                    suas extensas plantações de lavanda, que transformam a paisagem em um mar roxo durante a época de
                    floração, geralmente entre junho e agosto.
                </p>
            </div>
        </PaisStyled>
    );
};
