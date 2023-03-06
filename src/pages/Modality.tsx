import MarginContent from "../components/MarginContent"
import Navegation from "../components/Navegation"
import Positions from "../components/Positions"

interface ModalityProps {
  positions: {name:string, route:string}[]
}

export default function Modality({positions}:ModalityProps) {
  return (
    <>
      <Navegation/>
      <MarginContent>
        <Positions positions={positions}/>
      </MarginContent>
    </>
  )
}
