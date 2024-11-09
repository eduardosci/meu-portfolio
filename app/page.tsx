import { HeroSection } from "./components/pages/home/hero-section/Hero";
import { KnownTechs } from "./components/pages/home/known-techs";
import { WorkExperience } from "./components/pages/home/work-experience/Experience";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <WorkExperience />
    </>
  )
}
