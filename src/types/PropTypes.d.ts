import { ReactElement } from "react";

export interface ContainerProps {
    children: ReactElement | ReactElement[]
}

export interface ButtonProps {
    children: string,
    action: () => void
}

export interface NavegationItemProps {
    name: string;
    path: string;
    icon: string;
}

export interface PositionsProps {
    positions: { name: string, imgURL: string }[]
}

export interface PositionProps {
    name: string,
    imgURL: string
}