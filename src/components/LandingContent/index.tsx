import { ButtonsContainer, LandingTitle, MagnaAcademia, RedirectButton, SubtitlePowered } from "./components";

export default function LandingContent() {
  return (
    <>
      <LandingTitle>Jiu Jitsu Dictionary</LandingTitle>
      <ButtonsContainer>
        <RedirectButton to='/gi'>Gi</RedirectButton>
        <RedirectButton to='/nogi'>NoGi</RedirectButton>
      </ButtonsContainer>
      <SubtitlePowered>Powered by <MagnaAcademia href="https://www.instagram.com/magna.devoto" target='_blank'>Magna Academia</MagnaAcademia></SubtitlePowered>
    </>
  )
}
