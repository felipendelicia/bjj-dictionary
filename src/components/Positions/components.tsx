import styled from "styled-components";
import styles from "../../data/styles";
import { Link } from "react-router-dom";

export const PositionsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${styles.gap};
`

export const PositionContainer = styled(Link)`
`
