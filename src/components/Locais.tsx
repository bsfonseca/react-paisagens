import styled from "styled-components";

const LocaisStyled = styled.div`
    display: flex;
    flex-direction: row;
    height: 300px;

    #locais-imagem {
        width: 50%;
        background-image: url("./src/assets/paisagem3.jpg");
        background-size: cover;
    }

    #locais-texto {
        width: 50%;
        padding: 52px;

        h1 {
            margin-bottom: 8px;
            font-size: 26px;
        }
    }
`;

export const Locais = () => {
    return (
        <LocaisStyled>
            <div id="locais-imagem"></div>
            <div id="locais-texto">
                <h1>Le plateau de Valensole</h1>
                <p>
                    Os campos de lavanda na França são conhecidos mundialmente por sua beleza e aroma encantador.
                    Localizados principalmente na região da Provença, no sudeste da França, esses campos se estendem por
                    colinas ondulantes, criando uma paisagem pitoresca e deslumbrante.
                </p>
            </div>
        </LocaisStyled>
    );
};
