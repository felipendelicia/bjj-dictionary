import { ContainerProps } from "../../types/PropTypes";
import { Column } from "./components";

export default function ColumnContainer({children}:ContainerProps) {
  return (
    <Column>
        {children}
    </Column>
  )
}
