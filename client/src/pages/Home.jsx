import Header from "../components/layout/Header";
import HeroSection from "../components/sections/HeroSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import Services from "../components/sections/Services";
import ContentSection from "../components/sections/ContactSection";
import Footer from "../components/layout/Footer";
import EducationSection from "../components/sections/EducationSection";
import TechnicalSkills from "../components/sections/TechnicalSkills";
import AboutSection from "../components/sections/About";
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="mt-12">
          <HeroSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="services">
          <Services />
        </section>
        <section id="education">
          <EducationSection />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>
        
        <section id="skills">
          <TechnicalSkills />
        </section>

        <section id="contact">
          <ContentSection />
        </section>
      </main>
      <Footer />
    </>
  );
}
