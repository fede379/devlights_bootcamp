import { LandingSection } from "./LandingSection";

export function LandingBlackSection({ children }) {
  return (
    <LandingSection background="black">
      {children}
    </LandingSection>
  )
}