import styled from "styled-components";

interface PaisStyledProps {
    imgUrl: string;
}

export const PaisStyled = styled.div<PaisStyledProps>`
    display: flex;
    flex-direction: row;
    min-height: 300px;

    .texto {
        width: 50%;
        padding: 52px;

        h1 {
            margin-bottom: 8px;
            font-size: 26px;
        }

        h2 {
            margin-bottom: 8px;
            font-size: 18px;
            color: #555;
        }
    }

    .imagem {
        width: 50%;
        background-image: url(${(props) => props.imgUrl});
        background-size: cover;
        background-position: center;
    }
`;
