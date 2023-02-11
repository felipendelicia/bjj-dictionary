import { ReactElement } from "react";

export interface ContainerProps {
    children: ReactElement | ReactElement[]
}

export interface ButtonProps {
    children: string,
    action: ()=>void
}

export interface NavegationItemProps {
    name: string;
    path: string;
    icon: string;
}