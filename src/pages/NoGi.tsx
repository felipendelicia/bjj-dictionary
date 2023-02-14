import MarginContent from "../components/MarginContent";
import Navegation from "../components/Navegation";
import Positions from "../components/Positions";
import positions from "../data/positions";

export default function NoGi() {
  return (
    <>
      <Navegation/>
      <MarginContent>
        <Positions positions={positions.noGi}/>
      </MarginContent>
    </>
  )
}
