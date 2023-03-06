import Navegation from "../components/Navegation"
import Positions from "../components/Positions"

interface ModalityProps {
  positions: {name:string, route:string, img:string}[]
}

export default function Modality({positions}:ModalityProps) {
  return (
    <>
      <Navegation/>
      <Positions positions={positions}/>
    </>
  )
}
