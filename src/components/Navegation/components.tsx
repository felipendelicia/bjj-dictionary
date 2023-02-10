import styled from "styled-components";
import styles from "../../data/styles";
import { Link } from "react-router-dom";

export const NavegationContainer = styled.div`
    background-color: ${styles.primary};
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    gap: ${styles.gap};
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 1em 1em;
`

export const BubbleLink = styled(Link)`
    font-size: 2em;
`
