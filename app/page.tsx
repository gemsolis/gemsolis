import AboutMe from "@/components/AboutMe";
import Contacts from "@/components/Contacts";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
      <TechStack />
      <Contacts />
    </>
  );
}
