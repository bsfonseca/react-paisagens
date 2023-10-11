import styled from "styled-components";

const PaisStyled = styled.div`
    display: flex;
    flex-direction: row;
    height: 300px;

    #pais-texto {
        width: 50%;
        padding: 52px;

        h1 {
            margin-bottom: 8px;
            font-size: 26px;
        }
    }

    #pais-imagem {
        width: 50%;
        background-image: url("./src/assets/paisagem2.jpg");
        background-size: cover;
    }
`;

export const Pais = () => {
    return (
        <PaisStyled>
            <div id="pais-texto">
                <h1>Lorem Ipsum</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam pariatur eius quos nulla beatae
                    nostrum non repudiandae dolorem maxime officiis.
                </p>
            </div>
            <div id="pais-imagem"></div>
        </PaisStyled>
    );
};
