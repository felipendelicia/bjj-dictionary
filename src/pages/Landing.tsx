import CenteredContainer from "../components/CenteredContainer";
import ColumnContainer from "../components/ColumnContainer";
import LandingContent from "../components/LandingContent";

export default function Landing() {
  return (
    <CenteredContainer>
      <ColumnContainer>
        <LandingContent/>
      </ColumnContainer>
    </CenteredContainer>
  )
}
