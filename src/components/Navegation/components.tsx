import styled from "styled-components";
import styles from "../../data/styles";
import { Link } from "react-router-dom";

export const NavegationContainer = styled.div`
    color: ${styles.white};
    width: 100vw;
    background-color: ${styles.black};
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: ${styles.gap};
    padding: 1em 0;
`

export const Navbrand = styled(Link)`
    font-size: 1.2em;
    font-weight: bold;
    font-family: ${styles.alternativeFont};
`

export const CategoriesContainer = styled.div`
    display: flex;
    gap: ${styles.gap};
    
`

export const BubbleContainer = styled.div`
    border-radius: ${styles.borderRadius};
    padding: 0.5em 1em;
`

export const BubbleLinkContainer = styled(Link)`
    font-size: 1em;
    display: flex;
    gap: ${styles.gap};
`

export const BubbleContent = styled.span`

`
