import AboutSection from "@/app/components/AboutSection"
import HeroSection from "@/app/components/HeroSection"
import ProjectsSection from "./components/ProjectsSection"
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  )
}
