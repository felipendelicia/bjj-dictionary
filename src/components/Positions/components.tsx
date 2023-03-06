import styled from "styled-components";
import styles from "../../data/styles";
import { Link } from "react-router-dom";

export const PositionsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${styles.gap};
    margin: 0 15vw;
    overflow: hidden;
    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
        margin: 0 5vw;
    }
`

export const PositionContainerLink = styled(Link)`
`

export const PositionContainer = styled.div`
    position: relative;
    height: 60vh;
    width: 100%;
`

export const PositionImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: ${styles.borderRadius};
    filter: brightness(40%);
`

export const PositionTitle = styled.p`
    width: 100%;
    position: absolute;
    top: 15px;
    left: ${styles.gap};
    color: ${styles.white};
    font-size: 3em;
    font-weight: bold;
`