import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/scroll-progress";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Achievements } from "@/components/achievements";
import { Leadership } from "@/components/leadership";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { WelcomeScreen } from "@/components/welcome-screen";

export default function Home() {
  return (
    <main className="relative">
      <WelcomeScreen />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Leadership />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
