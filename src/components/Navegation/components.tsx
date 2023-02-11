import styled from "styled-components";
import styles from "../../data/styles";
import { Link } from "react-router-dom";

export const NavegationContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: ${styles.gap};
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 1em 0;
`

export const BubbleContainer = styled.div`
    border: 2px solid ${styles.primary};
    border-radius: ${styles.borderRadius};
    padding: 0.5em 1em;
`

export const BubbleLinkContainer = styled(Link)`
    font-size: 1em;
    display: flex;
    gap: ${styles.gap}
`
 
export const BubbleContent = styled.span`

`
