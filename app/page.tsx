import { HeroSection } from "./components/pages/home/hero-section/Hero";
import { KnownTechs } from "./components/pages/home/known-techs";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
    </>
  )
}
