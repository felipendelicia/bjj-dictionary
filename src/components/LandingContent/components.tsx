import styled from "styled-components";
import styles from "../../data/styles";
import { Link } from "react-router-dom";

export const LandingTitle = styled.h1`
    font-size: 4em;
    font-family: ${styles.alternativeFont};
    color: ${styles.white};
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: ${styles.gap};
`

export const RedirectButton = styled(Link)`
    font-size: 2em;
    font-weight: bold;
    padding: 0.5em 1.5em;
    background-color: ${styles.primary};
    color: ${styles.white};
    border-radius: 12px;
`

export const SubtitlePowered = styled.h2`
    font-size: 1em;
    color: ${styles.white};
    text-align: center;
    font-weight: normal;
`

export const MagnaAcademia = styled.a`
    color: ${styles.magnaPrimary};
    text-decoration: underline;
    font-weight: bold;
`